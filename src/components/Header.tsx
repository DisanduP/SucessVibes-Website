import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h3 className="text-orange-600">SuccessVibes</h3>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, '#features')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleNavClick(e, '#how-it-works')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#community" 
              onClick={(e) => handleNavClick(e, '#community')}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Community
            </a>
            <a href="#login" className="text-gray-700 hover:text-orange-600 transition-colors">Login</a>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              Join Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, '#features')}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => handleNavClick(e, '#how-it-works')}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                How It Works
              </a>
              <a 
                href="#community" 
                onClick={(e) => handleNavClick(e, '#community')}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Community
              </a>
              <a href="#login" className="text-gray-700 hover:text-orange-600 transition-colors">Login</a>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Join Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}