import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Tech Startup Founder',
    image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjBwZW9wbGV8ZW58MXx8fHwxNzY1NzE2MTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'SuccessVibes helped me find the perfect co-founder for my tech startup. The quality of connections here is unmatched.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'E-commerce Entrepreneur',
    image: 'https://images.unsplash.com/photo-1553484771-6e117b648d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1NzA0NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'The collaboration features are incredible. I\'ve received invaluable feedback on my business ideas from experienced entrepreneurs.'
  },
  {
    name: 'Emily Thompson',
    role: 'Marketing Consultant',
    image: 'https://images.unsplash.com/photo-1758520144420-3e5b22e9b9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc2NTY5MjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'This platform has transformed how I network. I\'ve made connections that led to three major client partnerships.'
  }
];

export function Community() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Join Our Thriving Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what successful entrepreneurs are saying about their experience on SuccessVibes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <Quote className="text-orange-600 mb-4" size={32} />
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-black">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join SuccessVibes today and become part of a global community of ambitious entrepreneurs and business leaders.
          </p>
          <button className="bg-orange-600 text-white px-10 py-4 rounded-lg hover:bg-orange-700 transition-all hover:scale-105">
            Join Free Today
          </button>
        </div>
      </div>
    </section>
  );
}