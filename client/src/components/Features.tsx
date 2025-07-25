import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-inter tracking-tight">
            Powerful Features for Document Intelligence
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter font-medium">
            Transform your document workflow with cutting-edge AI technology that makes every PDF searchable, 
            queryable, and conversational.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Feature 1: PDF Ingestion */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -mt-10 -mr-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Smart PDF Ingestion</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-inter">
                Upload any PDF document and watch as our advanced parsing technology extracts and structures 
                your content with precision, preserving context and meaning.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Multi-format support
                </div>
                <div className="flex items-center text-sm text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Automatic text extraction
                </div>
                <div className="flex items-center text-sm text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Structure preservation
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Vector Search */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-full -mt-10 -mr-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Semantic Vector Search</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-inter">
                Find information by meaning, not just keywords. Our vector embeddings understand context 
                and relationships to deliver remarkably accurate search results.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Contextual understanding
                </div>
                <div className="flex items-center text-sm text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Similarity matching
                </div>
                <div className="flex items-center text-sm text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Lightning-fast retrieval
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: AI Conversations */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-full -mt-10 -mr-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Natural Conversations</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-inter">
                Ask questions in plain English and get intelligent, contextual answers. Our AI understands 
                nuance and provides detailed responses based on your document content.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Natural language queries
                </div>
                <div className="flex items-center text-sm text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Contextual responses
                </div>
                <div className="flex items-center text-sm text-gray-600 font-inter">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Multi-turn conversations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Features */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-inter">Advanced Capabilities</h3>
            <p className="text-lg text-gray-600 font-inter">Built for professionals who demand more from their documents</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 font-inter">Instant Processing</h4>
              <p className="text-sm text-gray-600 font-inter">Documents processed in seconds, not minutes</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 font-inter">Enterprise Security</h4>
              <p className="text-sm text-gray-600 font-inter">Bank-level encryption and privacy protection</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 font-inter">Lightning Fast</h4>
              <p className="text-sm text-gray-600 font-inter">Sub-second response times for all queries</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 font-inter">Scalable API</h4>
              <p className="text-sm text-gray-600 font-inter">RESTful API for seamless integration</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-inter">
            Experience DocuMentor Today
          </Button>
          <p className="text-sm text-gray-500 mt-4 font-inter">No credit card required • Free trial available</p>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-100 rounded-full opacity-20"></div>
    </section>
  );
};

export default Features;
