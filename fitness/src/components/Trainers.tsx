import React from 'react';
import { Instagram, Twitter, Facebook, Award, Star } from 'lucide-react';

const Trainers: React.FC = () => {
  const trainers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'Strength & Conditioning',
      experience: '8 years',
      certifications: ['ACSM-CPT', 'CSCS'],
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.9,
      social: {
        instagram: '@sarahfit',
        twitter: '@sarahfitness',
        facebook: 'sarah.johnson.fit'
      }
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      specialty: 'HIIT & CrossFit',
      experience: '6 years',
      certifications: ['CF-L2', 'NASM-CPT'],
      image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.8,
      social: {
        instagram: '@mikefit',
        twitter: '@mikefitness',
        facebook: 'mike.rodriguez.trainer'
      }
    },
    {
      id: 3,
      name: 'Emma Davis',
      specialty: 'Yoga & Pilates',
      experience: '10 years',
      certifications: ['RYT-500', 'PMA-CPT'],
      image: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5.0,
      social: {
        instagram: '@emmayoga',
        twitter: '@emmadavis',
        facebook: 'emma.davis.yoga'
      }
    },
    {
      id: 4,
      name: 'David Chen',
      specialty: 'Boxing & Martial Arts',
      experience: '12 years',
      certifications: ['USA Boxing', 'ISSA-CPT'],
      image: 'https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.9,
      social: {
        instagram: '@davidboxing',
        twitter: '@davidchen',
        facebook: 'david.chen.boxing'
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            MEET OUR <span className="text-green-400">TRAINERS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our certified fitness professionals are here to guide you on your journey to peak performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-green-400 text-gray-900 px-2 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-current" />
                  <span>{trainer.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-green-400 font-semibold mb-2">{trainer.specialty}</p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                    <Award className="h-4 w-4" />
                    <span>{trainer.experience} experience</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <strong>Certified:</strong> {trainer.certifications.join(', ')}
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-700">
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
                
                <button className="w-full mt-4 bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-2 rounded-lg transition-colors duration-300">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;