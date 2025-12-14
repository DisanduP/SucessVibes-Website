import { Users, MessageCircle, Lightbulb, TrendingUp, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Network Building',
    description: 'Connect with like-minded entrepreneurs and expand your professional network globally.'
  },
  {
    icon: MessageCircle,
    title: 'Idea Sharing',
    description: 'Share your business ideas, get feedback, and collaborate with passionate professionals.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Discover innovative solutions and stay ahead of industry trends and opportunities.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Support',
    description: 'Access resources, mentorship, and partnerships to accelerate your business growth.'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Your data and ideas are protected with enterprise-grade security and privacy.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with entrepreneurs from around the world and explore international opportunities.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Everything You Need to Succeed</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools and connections you need to turn your entrepreneurial vision into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border-2 border-gray-200 hover:border-orange-600 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                  <Icon className="text-orange-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
