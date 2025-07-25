import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-primary">Picktime</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Products</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Enterprise</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
        </nav>
        
        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            Log in
          </Button>
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            Signup
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;