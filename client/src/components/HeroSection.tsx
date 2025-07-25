import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import ProductPreview from "./ProductPreview";
import FloatingElements from "./FloatingElements";
import RAGArchitectureSection from "./RAGArchitectureSection";
import Features from "./Features";
import Footer from "./Footer";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const HeroSection = () => {
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
        content: "Sorry, I encountered an error. Please make sure the server is running on localhost:3000.",
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
    "What are Divyansh's key skills?",
    "What projects has he worked on?",
    "What is his experience?",
    "What technologies does he know?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingElements />
      <Header />
      
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 py-12 lg:py-20 relative z-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 font-inter tracking-tight">
            Turn your PDFs into
            <br />
            <span className="text-blue-600">intelligent conversations</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl lg:max-w-lg mb-8 leading-relaxed font-inter font-medium">
            An intelligent AI agent that transforms your documents into interactive, conversational knowledge bases using advanced RAG technology.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium font-inter">PDF Ingestion</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium font-inter">RAG Pipeline</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium font-inter">Vector Search</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium font-inter">AI Conversations</span>
          </div>
          
          {/* CTA Button */}
          <Link to="/chat">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-inter"
            >
              Try DocuMentor
            </Button>
          </Link>
        </div>
        
        {/* Right Content - AI Document Processing Interface */}
        <div className="flex-1 relative">
          <div className="relative max-w-lg mx-auto">
            {/* Main AI Chat Dialog - Preview Only */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              {/* Dialog Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 font-inter">Chat with Document</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500 font-inter">AI Online</span>
                </div>
              </div>
              
              {/* Document Info */}
              <div className="mb-4 p-3 bg-gray-50 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 font-inter">hireDivyanshSharma.pdf</p>
                    <p className="text-xs text-gray-500 font-inter">Processed • Ready for questions</p>
                  </div>
                </div>
              </div>
              
              {/* Preview Chat Messages */}
              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs text-sm font-inter">
                    What are Divyansh's key skills and experience?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 p-3 rounded-lg max-w-xs text-sm font-inter">
                    Based on the document, Divyansh is a Full Stack Developer with expertise in React, Node.js, Python, and AI/ML. He has 3+ years of experience...
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs text-sm font-inter">
                    What projects has he worked on?
                  </div>
                </div>
              </div>
              
              {/* Preview Input Field */}
              <div className="flex space-x-2">
                <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm font-inter bg-gray-50 text-gray-500">
                  Try the live demo below...
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700" disabled>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </div>
              
              {/* AI Processing Indicator */}
              <div className="mt-3 flex items-center text-xs text-gray-500">
                <div className="flex space-x-1 mr-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="font-inter">RAG processing enabled • Vector search active</span>
              </div>
            </div>
            
            {/* Side Process Flow Card */}
            <div className="absolute -right-8 top-20 bg-white rounded-xl shadow-lg p-4 border border-gray-100 transform rotate-2 hidden lg:block w-48">
              <div className="text-xs font-medium text-gray-700 mb-3 font-inter">AI Pipeline</div>
              <div className="space-y-2">
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600 font-inter">PDF Ingested</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600 font-inter">Text Chunked</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600 font-inter">Embeddings Created</span>
                </div>
                <div className="flex items-center text-xs">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-gray-600 font-inter">Vector Search</span>
                </div>
              </div>
            </div>
            
            {/* Vector Database Visualization */}
            <div className="absolute -left-12 bottom-10 bg-white rounded-xl shadow-lg p-3 border border-gray-100 transform -rotate-3 hidden lg:block">
              <div className="text-xs font-medium text-gray-700 mb-2 font-inter">Vector DB</div>
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-sm ${i === 4 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-inter">1.2K chunks</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <Features />
      
      {/* RAG Architecture Section - Commented out */}
      {/* <RAGArchitectureSection /> */}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HeroSection;