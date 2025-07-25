import { Button } from "@/components/ui/button";

const RAGArchitectureSection = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-inter">
            RAG Application Flow Chart
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
            Deep dive into DocuMentor's intelligent architecture that powers document conversations 
            through advanced Retrieval-Augmented Generation (RAG) technology.
          </p>
        </div>

        {/* Main Architecture Diagram */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 shadow-2xl border border-gray-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* User Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-inter flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  User
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="font-medium text-gray-900 font-inter mb-2">API Request</div>
                    <code className="text-sm text-blue-700 bg-blue-100 px-2 py-1 rounded font-mono">
                      POST /ask {"{ question }"}
                    </code>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full mx-auto animate-pulse"></div>
                    <div className="text-xs text-gray-500 mt-1 font-inter">Request Flow</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <div className="font-medium text-gray-900 font-inter mb-2">Response</div>
                    <code className="text-sm text-green-700 bg-green-100 px-2 py-1 rounded font-mono">
                      200 OK {"{ answer }"}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Server Infrastructure */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-inter flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Server Infrastructure
                </h3>
                
                <div className="space-y-4">
                  {/* Node.js Process */}
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">N</span>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">Node.js Process</span>
                    </div>
                  </div>

                  {/* Express API */}
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">E</span>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">Express API Endpoint</span>
                    </div>
                  </div>

                  {/* Ingest Service */}
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">Ingest Service</span>
                    </div>
                  </div>

                  {/* PDF Document */}
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">PDF Document</span>
                    </div>
                  </div>

                  {/* Text Splitter */}
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">Text Splitter</span>
                    </div>
                  </div>

                  {/* Vector Store */}
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">InMemory Vector Store</span>
                    </div>
                  </div>

                  {/* Retriever */}
                  <div className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">Vector Store Retriever</span>
                    </div>
                  </div>

                  {/* LangChain Agent */}
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">LangChain Agent Chain</span>
                    </div>
                  </div>

                  {/* Prompt Template */}
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">Prompt Template</span>
                    </div>
                  </div>

                  {/* Output Parser */}
                  <div className="bg-pink-50 p-3 rounded-lg border border-pink-100">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">String Output Parser</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* External Services */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-inter flex items-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  External Services
                </h3>
                
                <div className="space-y-6">
                  {/* Google Embedding API */}
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">Google Embedding API</span>
                    </div>
                    <div className="text-sm text-gray-600 font-inter">
                      Converts text chunks into vector embeddings for semantic search
                    </div>
                  </div>

                  {/* Google Gemini LLM */}
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v6a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900 font-inter">Google Gemini LLM API</span>
                    </div>
                    <div className="text-sm text-gray-600 font-inter">
                      Generates intelligent responses based on context and user questions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Server Initialization Flow */}
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-inter flex items-center">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              Server Initialization Flow
            </h3>
            <div className="text-sm text-gray-600 font-inter mb-4">One-time setup on startup</div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="font-inter">Node.js Process calls initAgent()</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="font-inter">Ingest Service reads PDF file</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="font-inter">Text Splitter processes raw text</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="font-inter">Google Embedding API creates vectors</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                <span className="font-inter">InMemory Vector Store initialized</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="font-inter">LangChain Agent Chain assembled</span>
              </div>
            </div>
          </div>

          {/* API Request Flow */}
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-inter flex items-center">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              API Request Flow
            </h3>
            <div className="text-sm text-gray-600 font-inter mb-4">Per /ask request processing</div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="font-inter">User sends POST /ask request</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="font-inter">Express API invokes chain</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                <span className="font-inter">Vector Store performs similarity search</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="font-inter">Prompt Template formats context</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                <span className="font-inter">Gemini LLM generates answer</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                <span className="font-inter">Output Parser returns clean response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Implementation Details */}
        <div className="bg-gray-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-inter">Technical Implementation</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">N</span>
              </div>
              <div className="font-medium text-gray-900 font-inter">Node.js</div>
              <div className="text-sm text-gray-600 font-inter">Express Server</div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">LC</span>
              </div>
              <div className="font-medium text-gray-900 font-inter">LangChain</div>
              <div className="text-sm text-gray-600 font-inter">RAG Framework</div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">G</span>
              </div>
              <div className="font-medium text-gray-900 font-inter">Google AI</div>
              <div className="text-sm text-gray-600 font-inter">Embeddings & LLM</div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">V</span>
              </div>
              <div className="font-medium text-gray-900 font-inter">Vector Store</div>
              <div className="text-sm text-gray-600 font-inter">In-Memory DB</div>
            </div>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 font-inter shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View Source Code
          </Button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-100 rounded-full opacity-20"></div>
    </section>
  );
};

export default RAGArchitectureSection;
