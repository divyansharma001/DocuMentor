const ProductPreview = () => {
  return (
    <div className="relative max-w-4xl mx-auto mt-16">
      {/* Main scheduling interface mockup */}
      <div className="relative bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
        {/* Modal header */}
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">New Repeating Availability</h3>
          <button className="text-gray-400 hover:text-gray-600">×</button>
        </div>
        
        {/* Modal content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left side - Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Who Should Join It?</label>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-orange-400"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                  <div className="w-8 h-8 rounded-full bg-green-400"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-400"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4 text-primary" checked />
                  <span className="text-sm text-gray-700">Allow me to get calls again too</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" className="w-4 h-4 text-primary" />
                  <span className="text-sm text-gray-700">Allow me to get again</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-primary" />
                  <span className="text-sm text-gray-700">Suggest another date</span>
                </label>
              </div>
              
              <div className="flex space-x-2 mt-6">
                <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90">
                  Save
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50">
                  Discard
                </button>
              </div>
            </div>
            
            {/* Right side - Calendar/Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>Customer Support</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>Location Optional</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration of session</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" placeholder="Duration" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information (Optional)</label>
                <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm h-20" placeholder="Anything you want to tell your client..."></textarea>
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <button className="text-sm text-gray-500">Previous</button>
                <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Side calendar widget */}
      <div className="absolute -right-8 top-32 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-64 hidden lg:block">
        <div className="text-center mb-3">
          <h4 className="font-medium text-gray-900">Choose time that works</h4>
          <p className="text-sm text-gray-500">for everyone: 2 hour customer</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>First day</span>
            <span className="text-gray-500">10:00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Next day</span>
            <span className="text-gray-500">09:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;