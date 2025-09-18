import React, { useState } from 'react';
import { User, Calendar, Star, ArrowRight } from 'lucide-react';

const PersonalTraining: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'starter',
      name: 'Starter Package',
      sessions: 4,
      price: 299,
      duration: '1 month',
      features: [
        '4 One-on-one sessions',
        'Personalized workout plan',
        'Basic nutrition guidance',
        'Progress tracking'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Package',
      sessions: 8,
      price: 549,
      duration: '2 months',
      features: [
        '8 One-on-one sessions',
        'Custom workout & nutrition plan',
        'Bi-weekly progress assessments',
        '24/7 support via app',
        'Supplement recommendations'
      ],
      popular: true
    },
    {
      id: 'elite',
      name: 'Elite Package',
      sessions: 16,
      price: 999,
      duration: '3 months',
      features: [
        '16 One-on-one sessions',
        'Complete lifestyle transformation',
        'Weekly progress assessments',
        '24/7 personal support',
        'Meal prep guidance',
        'Recovery & mobility work'
      ]
    }
  ];

  const trainers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'Weight Loss & Strength',
      experience: '8 years',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Specialized in helping clients achieve sustainable weight loss and build functional strength.'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      specialty: 'Athletic Performance',
      experience: '6 years',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former professional athlete focused on optimizing performance and injury prevention.'
    },
    {
      id: 3,
      name: 'Emma Davis',
      specialty: 'Rehabilitation & Mobility',
      experience: '10 years',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in corrective exercise and helping clients overcome physical limitations.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            PERSONAL <span className="text-green-400">TRAINING</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get personalized attention and accelerate your results with one-on-one training 
            from our certified fitness professionals.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center bg-gray-800 rounded-xl p-8">
            <User className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Personalized Approach</h3>
            <p className="text-gray-300">
              Every workout is tailored specifically to your goals, fitness level, and preferences.
            </p>
          </div>
          <div className="text-center bg-gray-800 rounded-xl p-8">
            <Calendar className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Flexible Scheduling</h3>
            <p className="text-gray-300">
              Train on your schedule with flexible booking options that fit your lifestyle.
            </p>
          </div>
          <div className="text-center bg-gray-800 rounded-xl p-8">
            <Star className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Expert Guidance</h3>
            <p className="text-gray-300">
              Learn proper form, prevent injuries, and maximize results with professional coaching.
            </p>
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Training Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`relative bg-gray-800 rounded-xl p-8 transition-transform duration-300 hover:scale-105 ${
                  pkg.popular ? 'ring-2 ring-green-400' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-black text-green-400 mb-2">${pkg.price}</div>
                  <p className="text-gray-400">{pkg.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-3 rounded-lg font-bold transition-colors duration-300 flex items-center justify-center space-x-2 ${
                    selectedPackage === pkg.id
                      ? 'bg-green-500 text-gray-900'
                      : 'bg-green-400 hover:bg-green-500 text-gray-900'
                  }`}
                >
                  <span>{selectedPackage === pkg.id ? 'Selected' : 'Choose Package'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trainers Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-gray-800 rounded-xl overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{trainer.rating}</span>
                    </div>
                  </div>
                  <p className="text-green-400 font-semibold mb-2">{trainer.specialty}</p>
                  <p className="text-gray-400 mb-4">{trainer.experience} experience</p>
                  <p className="text-gray-300 text-sm mb-4">{trainer.bio}</p>
                  <button className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-2 rounded-lg transition-colors duration-300">
                    Book with {trainer.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your complimentary consultation and take the first step towards your transformation.
          </p>
          <button className="bg-green-400 hover:bg-green-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;