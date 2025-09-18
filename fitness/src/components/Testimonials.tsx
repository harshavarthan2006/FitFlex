import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jessica Miller',
      age: 28,
      program: 'Weight Loss Program',
      rating: 5,
      text: "Train Tribe completely transformed my life. I lost 30 pounds in 6 months and gained confidence I never knew I had. The trainers are incredible!",
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      beforeAfter: {
        before: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        after: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
      }
    },
    {
      id: 2,
      name: 'Marcus Thompson',
      age: 35,
      program: 'Strength Training',
      rating: 5,
      text: "After years of inconsistent gym routines, Train Tribe gave me the structure and motivation I needed. I've never been stronger!",
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      beforeAfter: {
        before: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        after: 'https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
      }
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      age: 42,
      program: 'Yoga & Wellness',
      rating: 5,
      text: "The yoga program helped me find balance in both my body and mind. I feel more centered and energized than ever before.",
      image: 'https://images.pexels.com/photos/3823188/pexels-photo-3823188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      beforeAfter: null
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SUCCESS <span className="text-green-400">STORIES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real transformations from real people. See how Train Tribe members achieved their fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 rounded-xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.program}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-green-400 mb-4" />
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            INCREDIBLE <span className="text-green-400">TRANSFORMATIONS</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              testimonial.beforeAfter && (
                <div key={testimonial.id} className="text-center">
                  <h4 className="text-xl font-bold text-white mb-4">{testimonial.name}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 mb-2 font-semibold">BEFORE</p>
                      <img
                        src={testimonial.beforeAfter.before}
                        alt={`${testimonial.name} before`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-green-400 mb-2 font-semibold">AFTER</p>
                      <img
                        src={testimonial.beforeAfter.after}
                        alt={`${testimonial.name} after`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-green-400 hover:bg-green-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;