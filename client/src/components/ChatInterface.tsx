import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Loader2, Send, Zap, FileText, MessageSquare } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  className?: string;
  compact?: boolean;
}

const ChatInterface = ({ className = "", compact = false }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "assistant",
      content: "Hello! I'm your AI assistant for the DocuMentor system. I can answer questions about the uploaded PDF document. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Test connection on mount
  useEffect(() => {
    testConnection();
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const testConnection = async () => {
    try {
      const response = await fetch("http://localhost:3000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: "test" }),
      });
      setIsConnected(true);
      setError(null);
    } catch (err) {
      setIsConnected(false);
      setError("Cannot connect to server. Make sure it's running on localhost:3000");
    }
  };

  const sendQuestion = async () => {
    if (!question.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setQuestion("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: userMessage.content }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Server error" }));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: data.answer || "I received your question but couldn't generate an answer.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsConnected(true);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "An error occurred";
      setError(errorMsg);
      setIsConnected(false);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: `Sorry, I encountered an error: ${errorMsg}. Please make sure the DocuMentor server is running on localhost:3000.`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendQuestion();
    }
  };

  const quickQuestions = [
    "What are the main qualifications mentioned?",
    "What technologies and skills are highlighted?",
    "What work experience is described?",
    "What projects or achievements are mentioned?",
    "Summarize the key points of this document"
  ];

  const handleQuickQuestion = (q: string) => {
    setQuestion(q);
  };

  if (compact) {
    return (
      <Card className={`bg-white border border-gray-200 rounded-xl shadow-lg ${className}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900 font-inter">Ask AI</h3>
            </div>
            <Badge variant={isConnected ? "default" : "destructive"} className="text-xs">
              {isConnected ? "Connected" : "Disconnected"}
            </Badge>
          </div>
          
          <div className="flex space-x-2">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about the document..."
              className="flex-1 text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={sendQuestion}
              disabled={!question.trim() || isLoading}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={`bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-inter">DocuMentor AI Chat</h3>
              <p className="text-sm text-gray-600 font-inter">Ask questions about the document</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600 font-inter">
              {isConnected ? "Connected" : "Disconnected"}
            </span>
          </div>
        </div>
      </div>

      {/* Document Info */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <FileText className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 font-inter">hireDivyanshSharma.pdf</p>
            <p className="text-xs text-gray-500 font-inter">Active Document • Ready for questions</p>
          </div>
          <div className="ml-auto">
            <Badge className="bg-green-100 text-green-700 text-xs">
              <Zap className="w-3 h-3 mr-1" />
              RAG Enabled
            </Badge>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-3 font-inter">Try these questions:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.slice(0, 3).map((q, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleQuickQuestion(q)}
              className="text-xs font-inter"
              disabled={isLoading}
            >
              {q}
            </Button>
          ))}
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="p-4 border-b border-gray-200">
          <Alert className="border-red-200 bg-red-50">
            <AlertDescription className="text-red-700 font-inter">
              <div className="flex items-center space-x-2">
                <span>{error}</span>
                <Button
                  onClick={testConnection}
                  variant="outline"
                  size="sm"
                  className="ml-2 text-xs"
                >
                  Retry
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                message.type === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-900 border border-gray-200 shadow-sm"
              }`}
            >
              <p className="text-sm font-inter leading-relaxed whitespace-pre-wrap">{message.content}</p>
              <p className={`text-xs mt-1 ${
                message.type === "user" ? "text-blue-100" : "text-gray-500"
              } font-inter`}>
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-900 px-4 py-3 rounded-lg flex items-center space-x-2 border border-gray-200 shadow-sm">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
              <span className="text-sm font-inter">Processing your question...</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 bg-white border-t border-gray-200">
        <div className="flex space-x-3">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything about the document..."
            className="flex-1 font-inter"
            disabled={isLoading || !isConnected}
          />
          <Button
            onClick={sendQuestion}
            disabled={!question.trim() || isLoading || !isConnected}
            className="bg-blue-600 hover:bg-blue-700 font-inter px-6"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
        
        {/* API Status */}
        <div className="mt-3 flex items-center text-xs text-gray-500 font-inter">
          <div className="flex space-x-1 mr-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          <span>Powered by DocuMentor API • RAG Technology • Gemini AI</span>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;
