import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-orange-600 mb-4">SuccessVibes</h3>
            <p className="text-gray-400">
              Empowering entrepreneurs to connect, collaborate, and succeed together.
            </p>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 SuccessVibes. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}