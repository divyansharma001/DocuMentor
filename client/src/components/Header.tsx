import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full px-6 py-6 relative z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
           
          </div>
          <span className="text-2xl font-bold text-gray-900 font-inter">
            DocuMentor
          </span>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium font-inter">
            Features
          </a>
          <Link to="/chat" className="text-gray-600 hover:text-gray-900 transition-colors font-medium font-inter">
            Chat
          </Link>
          <Link to="/api-docs" className="text-gray-600 hover:text-gray-900 transition-colors font-medium font-inter">
            API
          </Link>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium font-inter">
            Pricing
          </a>
        </nav>
        
        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium font-inter">
            Sign In
          </Button>
          <Link to="/chat">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;