import { Button } from "@/components/ui/button";

const ArchitectureSection = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-inter">
            System Architecture
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
            Discover how DocuMentor's intelligent RAG pipeline transforms your documents into 
            conversational knowledge bases through advanced AI technology.
          </p>
        </div>

        {/* Architecture Diagram Container */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
            {/* Embedded Eraser.io Diagram */}
            <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-white shadow-lg">
              <iframe
                src="https://app.eraser.io/workspace/jBow2tkBIyjKzLfUmsLb?origin=share"
                className="w-full h-full border-0"
                title="DocuMentor System Architecture"
                loading="lazy"
                allow="fullscreen"
              />
              
              {/* Loading Overlay */}
              <div className="absolute inset-0 bg-gray-50 flex items-center justify-center animate-pulse">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600 font-inter">Loading Architecture Diagram...</p>
                </div>
              </div>
            </div>
            
            {/* Diagram Caption */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 font-inter">
                Interactive Architecture Diagram • 
                <a href="https://app.eraser.io/workspace/jBow2tkBIyjKzLfUmsLb?origin=share" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-blue-600 hover:text-blue-700 ml-1">
                  View Full Screen
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Architecture Flow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">PDF Ingestion</h3>
            <p className="text-gray-600 text-sm font-inter">Upload and process documents with advanced parsing</p>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">Text Chunking</h3>
            <p className="text-gray-600 text-sm font-inter">Intelligent segmentation for optimal processing</p>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">Vector Embeddings</h3>
            <p className="text-gray-600 text-sm font-inter">Create semantic representations using AI models</p>
          </div>

          {/* Step 4 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">AI Conversations</h3>
            <p className="text-gray-600 text-sm font-inter">Natural language interactions with your documents</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-inter">Powered by Modern Tech Stack</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {/* React */}
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-medium text-gray-900 font-inter">React</span>
            </div>

            {/* Node.js */}
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-medium text-gray-900 font-inter">Node.js</span>
            </div>

            {/* Python */}
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Py</span>
              </div>
              <span className="font-medium text-gray-900 font-inter">Python</span>
            </div>

            {/* OpenAI */}
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-medium text-gray-900 font-inter">OpenAI</span>
            </div>

            {/* Vector DB */}
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-medium text-gray-900 font-inter">Vector DB</span>
            </div>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 font-inter shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Explore Technical Documentation
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

export default ArchitectureSection;
