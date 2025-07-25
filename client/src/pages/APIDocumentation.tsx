import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import APIDemo from "@/components/APIDemo";

const APIDocumentation = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedLanguage, setSelectedLanguage] = useState("curl");

  const codeExamples = {
    curl: `curl -X POST http://localhost:3000/ask \\
  -H 'Content-Type: application/json' \\
  -d '{"question": "What is the main topic of the PDF?"}'`,
    javascript: `const response = await fetch('http://localhost:3000/ask', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    question: 'What are the key qualifications mentioned in the document?'
  })
});

const data = await response.json();
console.log(data.answer);`,
    python: `import requests
import json

url = "http://localhost:3000/ask"
payload = {
    "question": "What are the main skills highlighted in the document?"
}

response = requests.post(url, json=payload)
data = response.json()
print(data['answer'])`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingElements />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-inter tracking-tight">
              API Documentation
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter font-medium">
            Complete reference for integrating with the DocuMentor RAG-based document Q&A API
          </p>
          
          {/* Quick Info Pills */}
          <div className="flex flex-wrap gap-2 mt-8 justify-center">
            <Badge className="bg-blue-100 text-blue-700 px-3 py-1 font-inter">REST API</Badge>
            <Badge className="bg-purple-100 text-purple-700 px-3 py-1 font-inter">JSON</Badge>
            <Badge className="bg-green-100 text-green-700 px-3 py-1 font-inter">RAG Powered</Badge>
            <Badge className="bg-orange-100 text-orange-700 px-3 py-1 font-inter">Gemini AI</Badge>
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 bg-white rounded-lg shadow-sm border border-gray-200 p-1">
            <TabsTrigger value="overview" className="font-inter font-medium">Overview</TabsTrigger>
            <TabsTrigger value="demo" className="font-inter font-medium">Live Demo</TabsTrigger>
            <TabsTrigger value="endpoints" className="font-inter font-medium">Endpoints</TabsTrigger>
            <TabsTrigger value="examples" className="font-inter font-medium">Examples</TabsTrigger>
            <TabsTrigger value="architecture" className="font-inter font-medium">Architecture</TabsTrigger>
            <TabsTrigger value="errors" className="font-inter font-medium">Errors</TabsTrigger>
            <TabsTrigger value="sdk" className="font-inter font-medium">SDKs</TabsTrigger>
          </TabsList>

          {/* Demo Tab */}
          <TabsContent value="demo" className="mt-8">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">Interactive API Demo</h3>
                <p className="text-gray-600 font-inter">
                  Test the DocuMentor API directly from this interface. Make sure your server is running on localhost:3000.
                </p>
              </div>
              <APIDemo />
            </div>
          </TabsContent>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Getting Started Card */}
              <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-inter">Quick Start</h3>
                </div>
                <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                  Get started with the DocuMentor API in minutes. Our RAG-powered system transforms PDF documents into conversational knowledge bases.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-xs font-bold">1</span>
                    </div>
                    <span className="text-gray-700 font-inter">Set up your environment variables</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-xs font-bold">2</span>
                    </div>
                    <span className="text-gray-700 font-inter">Start the server on port 3000</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-xs font-bold">3</span>
                    </div>
                    <span className="text-gray-700 font-inter">Make your first API call</span>
                  </div>
                </div>
              </Card>

              {/* Base URL Card */}
              <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-inter">Base URL</h3>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <code className="text-blue-600 font-mono text-lg">http://localhost:3000</code>
                </div>
                <p className="text-gray-600 mt-4 font-inter">
                  All API requests should be made to this base URL. The server runs on port 3000 by default.
                </p>
              </Card>
            </div>

            {/* Technology Stack */}
            <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-inter">Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 font-inter">Express.js</h4>
                  <p className="text-sm text-gray-600 font-inter">Backend Framework</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 font-inter">LangChain</h4>
                  <p className="text-sm text-gray-600 font-inter">RAG Framework</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 font-inter">Gemini AI</h4>
                  <p className="text-sm text-gray-600 font-inter">Language Model</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 font-inter">PDF Parse</h4>
                  <p className="text-sm text-gray-600 font-inter">Document Processing</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Endpoints Tab */}
          <TabsContent value="endpoints" className="mt-8">
            <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-inter">API Endpoints</h3>
              </div>

              {/* POST /ask Endpoint */}
              <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                <div className="flex items-center mb-4">
                  <Badge className="bg-green-100 text-green-700 mr-3 font-mono">POST</Badge>
                  <code className="text-lg font-mono text-gray-900">/ask</code>
                </div>
                <p className="text-gray-600 mb-6 font-inter">
                  Ask a question about the PDF document content using RAG technology.
                </p>

                {/* Request */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Request</h4>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="mb-4">
                      <strong className="text-gray-700 font-inter">Content-Type:</strong>
                      <code className="ml-2 text-blue-600 font-mono">application/json</code>
                    </div>
                    <div>
                      <strong className="text-gray-700 font-inter">Body:</strong>
                      <pre className="mt-2 bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`{
  "question": "string"
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Response */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Response</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-green-100 text-green-700 mr-2">200</Badge>
                        <span className="text-gray-700 font-inter">Success</span>
                      </div>
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`{
  "answer": "string"
}`}
                      </pre>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-red-100 text-red-700 mr-2">400</Badge>
                        <span className="text-gray-700 font-inter">Bad Request</span>
                      </div>
                      <pre className="bg-gray-900 text-red-400 p-4 rounded-lg overflow-x-auto">
{`{
  "error": "Missing 'question' in request body."
}`}
                      </pre>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-red-100 text-red-700 mr-2">500</Badge>
                        <span className="text-gray-700 font-inter">Internal Server Error</span>
                      </div>
                      <pre className="bg-gray-900 text-red-400 p-4 rounded-lg overflow-x-auto">
{`{
  "error": "Failed to process the question."
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Parameters Table */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 font-inter">Parameters</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 font-inter">Parameter</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 font-inter">Type</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 font-inter">Required</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 font-inter">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-blue-600">question</td>
                          <td className="px-4 py-3 text-sm text-gray-900 font-inter">string</td>
                          <td className="px-4 py-3 text-sm">
                            <Badge className="bg-red-100 text-red-700">Yes</Badge>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600 font-inter">The question to ask about the PDF content</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="mt-8">
            <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-inter">Code Examples</h3>
              </div>

              {/* Language Selector */}
              <div className="flex space-x-2 mb-6">
                {Object.keys(codeExamples).map((lang) => (
                  <Button
                    key={lang}
                    variant={selectedLanguage === lang ? "default" : "outline"}
                    onClick={() => setSelectedLanguage(lang)}
                    className="font-inter capitalize"
                  >
                    {lang}
                  </Button>
                ))}
              </div>

              {/* Code Block */}
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300 font-inter capitalize">{selectedLanguage}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-300 border-gray-600 hover:bg-gray-800"
                    onClick={() => navigator.clipboard.writeText(codeExamples[selectedLanguage])}
                  >
                    Copy
                  </Button>
                </div>
                <pre className="text-green-400 overflow-x-auto">
                  <code>{codeExamples[selectedLanguage]}</code>
                </pre>
              </div>

              {/* Example Response */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 font-inter">Example Response</h4>
                <div className="bg-gray-900 rounded-xl p-6">
                  <pre className="text-green-400">
{`{
  "answer": "Based on the document, Divyansh is a Full Stack Developer with expertise in React, Node.js, Python, and AI/ML. He has 3+ years of experience and has worked on several projects including e-commerce platforms, data analytics dashboards, and machine learning applications."
}`}
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="mt-8">
            <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-inter">RAG Architecture</h3>
              </div>

              {/* Process Flow */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 text-xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-inter">PDF Ingestion</h4>
                    <p className="text-sm text-gray-600 font-inter">Document is loaded and text is extracted using pdf-parse</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 text-xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-inter">Text Chunking</h4>
                    <p className="text-sm text-gray-600 font-inter">Text is split into 1000-character chunks with 100-character overlap</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 text-xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-inter">Embeddings</h4>
                    <p className="text-sm text-gray-600 font-inter">Chunks are converted to vector embeddings using Google's embedding-001</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-orange-600 text-xl font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-inter">Vector Search</h4>
                    <p className="text-sm text-gray-600 font-inter">Relevant chunks are retrieved based on question similarity</p>
                  </div>
                </div>

                {/* Environment Variables */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 font-inter">Environment Variables</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <div>
                        <code className="text-blue-600 font-mono">GOOGLE_API_KEY</code>
                        <Badge className="bg-red-100 text-red-700 ml-2">Required</Badge>
                      </div>
                      <span className="text-gray-600 font-inter">Google Generative AI API key</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <div>
                        <code className="text-blue-600 font-mono">PORT</code>
                        <Badge className="bg-gray-100 text-gray-700 ml-2">Optional</Badge>
                      </div>
                      <span className="text-gray-600 font-inter">Server port (defaults to 3000)</span>
                    </div>
                  </div>
                </div>

                {/* Current Configuration */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 font-inter">Current Configuration</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-gray-700 font-inter">LLM Model:</strong>
                      <span className="ml-2 text-blue-600 font-mono">Gemini 2.0 Flash</span>
                    </div>
                    <div>
                      <strong className="text-gray-700 font-inter">Max Tokens:</strong>
                      <span className="ml-2 text-blue-600 font-mono">2048</span>
                    </div>
                    <div>
                      <strong className="text-gray-700 font-inter">Embeddings:</strong>
                      <span className="ml-2 text-blue-600 font-mono">models/embedding-001</span>
                    </div>
                    <div>
                      <strong className="text-gray-700 font-inter">Chunk Size:</strong>
                      <span className="ml-2 text-blue-600 font-mono">1000 characters</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Errors Tab */}
          <TabsContent value="errors" className="mt-8">
            <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-inter">Error Handling</h3>
              </div>

              <div className="space-y-6">
                {/* 400 Error */}
                <Alert className="border-orange-200 bg-orange-50">
                  <div className="flex items-start">
                    <Badge className="bg-orange-100 text-orange-700 mr-4">400</Badge>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 font-inter">Bad Request</h4>
                      <AlertDescription className="text-gray-600 font-inter mb-3">
                        The request is malformed or missing required parameters.
                      </AlertDescription>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <pre className="text-orange-400 text-sm">
{`{
  "error": "Missing 'question' in request body."
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </Alert>

                {/* 500 Error */}
                <Alert className="border-red-200 bg-red-50">
                  <div className="flex items-start">
                    <Badge className="bg-red-100 text-red-700 mr-4">500</Badge>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 font-inter">Internal Server Error</h4>
                      <AlertDescription className="text-gray-600 font-inter mb-3">
                        An error occurred while processing the request. This could be due to AI model issues or server problems.
                      </AlertDescription>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <pre className="text-red-400 text-sm">
{`{
  "error": "Failed to process the question."
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </Alert>

                {/* Best Practices */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 font-inter">Error Handling Best Practices</h4>
                  <ul className="space-y-2 text-gray-600 font-inter">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Always check the HTTP status code before processing the response
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Implement retry logic for 500 errors with exponential backoff
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Validate request parameters on the client side before sending
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Handle network timeouts gracefully
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* SDKs Tab */}
          <TabsContent value="sdk" className="mt-8">
            <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-inter">SDKs & Tools</h3>
              </div>

              <div className="space-y-8">
                {/* Coming Soon */}
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 font-inter">SDKs Coming Soon</h4>
                  <p className="text-gray-600 max-w-2xl mx-auto font-inter leading-relaxed">
                    We're working on official SDKs for popular programming languages to make integration even easier. 
                    In the meantime, you can use the REST API directly with any HTTP client.
                  </p>
                </div>

                {/* Planned SDKs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2 font-inter">JavaScript/Node.js SDK</h5>
                    <p className="text-sm text-gray-600 font-inter">Official SDK for JavaScript and Node.js applications</p>
                  </div>
                  <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2 font-inter">Python SDK</h5>
                    <p className="text-sm text-gray-600 font-inter">Native Python package with type hints and async support</p>
                  </div>
                  <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2 font-inter">Go SDK</h5>
                    <p className="text-sm text-gray-600 font-inter">Lightweight SDK for Go applications with full typing</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default APIDocumentation;
