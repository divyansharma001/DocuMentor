import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const APIDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: "Hello! I'm ready to answer questions about the document. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: data.answer,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: "Sorry, I encountered an error processing your question. Please make sure the server is running on localhost:3000.",
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
    "What is the main topic of the document?",
    "What are the key skills mentioned?",
    "What experience does Divyansh have?",
    "What projects has he worked on?"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-inter">Live API Demo</h3>
                <p className="text-sm text-gray-600 font-inter">Ask questions about the document</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-inter">API Ready</span>
            </div>
          </div>
        </div>

        {/* Document Info */}
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 font-inter">hireDivyanshSharma.pdf</p>
              <p className="text-xs text-gray-500 font-inter">Active Document • Ready for questions</p>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-4 border-b border-gray-200">
            <Alert className="border-red-200 bg-red-50">
              <AlertDescription className="text-red-700 font-inter">
                {error}
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm font-inter leading-relaxed">{message.content}</p>
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
              <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm font-inter">Processing your question...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Questions */}
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <p className="text-sm font-medium text-gray-700 mb-3 font-inter">Quick Questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((q, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setQuestion(q)}
                className="text-xs font-inter"
                disabled={isLoading}
              >
                {q}
              </Button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-6 bg-white">
          <div className="flex space-x-3">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything about the document..."
              className="flex-1 font-inter"
              disabled={isLoading}
            />
            <Button
              onClick={sendQuestion}
              disabled={!question.trim() || isLoading}
              className="bg-blue-600 hover:bg-blue-700 font-inter"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
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
            <span>RAG processing enabled • Vector search active</span>
          </div>
        </div>
      </Card>

      {/* Connection Instructions */}
      <Card className="mt-6 p-6 bg-blue-50 border border-blue-200">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mt-0.5">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 mb-1 font-inter">Server Connection</h4>
            <p className="text-sm text-blue-800 font-inter mb-2">
              This demo connects to your local DocuMentor server. Make sure it's running on localhost:3000.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <code className="text-sm text-gray-800 font-mono">npm run dev</code>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default APIDemo;
