import { UserPlus, Search, MessageSquare, Rocket } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Create Your Profile',
    description: 'Sign up and build your professional profile showcasing your expertise and interests.'
  },
  {
    icon: Search,
    number: '02',
    title: 'Discover Connections',
    description: 'Find entrepreneurs and business professionals who share your vision and goals.'
  },
  {
    icon: MessageSquare,
    number: '03',
    title: 'Share & Collaborate',
    description: 'Exchange ideas, provide feedback, and collaborate on exciting projects together.'
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Grow Together',
    description: 'Build meaningful partnerships and watch your business ventures take flight.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">How It Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Getting started is simple. Follow these four easy steps to begin your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-orange-600 mb-2 opacity-50">{step.number}</div>
                  <h3 className="text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-orange-600 opacity-20"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
