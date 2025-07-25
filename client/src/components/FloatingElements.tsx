const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left geometric shapes */}
      <div className="absolute top-20 left-20 w-12 h-12 bg-blue-100 rounded-full opacity-60"></div>
      <div className="absolute top-32 left-32 w-8 h-8 bg-purple-100 rounded-full opacity-40"></div>
      <div className="absolute top-40 left-16 w-6 h-6 bg-pink-100 rounded-full opacity-50"></div>
      
      {/* Top right geometric shapes */}
      <div className="absolute top-24 right-24 w-10 h-10 bg-green-100 rounded-full opacity-50"></div>
      <div className="absolute top-16 right-40 w-8 h-8 bg-blue-100 rounded-full opacity-40"></div>
      <div className="absolute top-36 right-32 w-6 h-6 bg-yellow-100 rounded-full opacity-60"></div>
      
      {/* Bottom left geometric shapes */}
      <div className="absolute bottom-40 left-24 w-8 h-8 bg-indigo-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-52 left-40 w-6 h-6 bg-pink-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-16 w-10 h-10 bg-cyan-100 rounded-full opacity-60"></div>
      
      {/* Bottom right geometric shapes */}
      <div className="absolute bottom-48 right-20 w-12 h-12 bg-orange-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-36 right-36 w-8 h-8 bg-teal-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-60 right-24 w-6 h-6 bg-rose-100 rounded-full opacity-60"></div>
      
      {/* Middle floating elements */}
      <div className="absolute top-1/2 left-8 w-8 h-8 bg-violet-100 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 right-8 w-10 h-10 bg-emerald-100 rounded-full opacity-40"></div>
      
      {/* Additional scattered elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-amber-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-lime-100 rounded-full opacity-40"></div>
      <div className="absolute top-3/4 left-1/3 w-8 h-8 bg-sky-100 rounded-full opacity-50"></div>
    </div>
  );
};

export default FloatingElements;