import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import ChatInterface from "@/components/ChatInterface";
import { MessageSquare, FileText, Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingElements />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium font-inter"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-inter tracking-tight">
              Chat with DocuMentor
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter font-medium">
            Experience the power of RAG technology. Ask intelligent questions about PDF documents and get contextual answers.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 mt-8 justify-center">
            <Badge className="bg-blue-100 text-blue-700 px-3 py-1 font-inter">
              <Zap className="w-3 h-3 mr-1" />
              RAG Powered
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 px-3 py-1 font-inter">
              <FileText className="w-3 h-3 mr-1" />
              PDF Analysis
            </Badge>
            <Badge className="bg-green-100 text-green-700 px-3 py-1 font-inter">Real-time AI</Badge>
            <Badge className="bg-orange-100 text-orange-700 px-3 py-1 font-inter">Vector Search</Badge>
          </div>
        </div>

        {/* Main Chat Interface */}
        <div className="max-w-5xl mx-auto">
          <ChatInterface />
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {/* How it Works */}
          <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">How It Works</h3>
            <p className="text-gray-600 text-sm font-inter leading-relaxed">
              Our RAG system processes PDF documents, creates vector embeddings, and uses semantic search to find relevant context for your questions.
            </p>
          </Card>

          {/* Current Document */}
          <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">Active Document</h3>
            <p className="text-gray-600 text-sm font-inter leading-relaxed mb-2">
              <strong>hireDivyanshSharma.pdf</strong>
            </p>
            <p className="text-gray-500 text-xs font-inter">
              Resume document processed and ready for questions about skills, experience, and projects.
            </p>
          </Card>

          {/* AI Model */}
          <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">AI Model</h3>
            <p className="text-gray-600 text-sm font-inter leading-relaxed">
              Powered by Google's Gemini 2.0 Flash with advanced understanding and 2048 token output capacity.
            </p>
          </Card>
        </div>

        {/* Setup Instructions */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-lg max-w-5xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-blue-900 mb-3 text-lg font-inter">Quick Setup Guide</h4>
              <p className="text-blue-800 font-inter mb-4">
                To start using DocuMentor, make sure your API server is running:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-sm font-medium text-gray-700 mb-2 font-inter">1. Install Dependencies</p>
                  <code className="text-sm text-gray-800 font-mono bg-gray-100 px-2 py-1 rounded">
                    cd server && npm install
                  </code>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-sm font-medium text-gray-700 mb-2 font-inter">2. Start Server</p>
                  <code className="text-sm text-gray-800 font-mono bg-gray-100 px-2 py-1 rounded">
                    npm run dev
                  </code>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium text-gray-700 mb-2 font-inter">3. Environment Setup</p>
                <code className="text-xs text-gray-800 font-mono bg-gray-100 px-2 py-1 rounded">
                  GOOGLE_API_KEY=your_google_api_key_here
                </code>
                <p className="text-xs text-blue-700 mt-1 font-inter">
                  Add this to your server/.env file
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Sample Questions */}
        <Card className="mt-8 p-6 bg-white border border-gray-200 rounded-xl shadow-lg max-w-5xl mx-auto">
          <h4 className="font-semibold text-gray-900 mb-4 font-inter">Sample Questions to Try:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "What are Divyansh's main technical skills?",
              "What programming languages does he know?",
              "What work experience does he have?",
              "What projects has he worked on?",
              "What is his educational background?",
              "What frameworks and tools is he familiar with?"
            ].map((question, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <MessageSquare className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-inter">{question}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ChatPage;
