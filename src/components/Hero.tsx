import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-black mb-6">
              Connect. Collaborate. <span className="text-orange-600">Succeed.</span>
            </h1>
            <p className="text-gray-700 mb-8 max-w-xl">
              Join thousands of entrepreneurs and business professionals sharing ideas, building partnerships, and growing their ventures together on the world's leading business networking platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all hover:scale-105 flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight size={20} />
              </button>
              <button className="bg-white text-black border-2 border-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all">
                Watch Demo
              </button>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-black">50K+</p>
                <p className="text-gray-600">Active Members</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <p className="text-black">10K+</p>
                <p className="text-gray-600">Ideas Shared</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <p className="text-black">500+</p>
                <p className="text-gray-600">Success Stories</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758520144420-3e5b22e9b9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc2NTY5MjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business professionals networking"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-white">🚀 Join the movement</p>
              <p className="text-orange-100">New member every 5 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
