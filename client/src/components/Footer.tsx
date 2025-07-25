const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm font-inter">
          © 2025 DocuMentor. Made with ❤️ by Divyansh
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a 
            href="https://x.com/divyansharma001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://github.com/divyansharma001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/divyansharma001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
