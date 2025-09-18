import React from 'react';
import { ArrowRight, Clock, Users, Target } from 'lucide-react';

interface ProgramsProps {
  searchQuery: string;
}

const Programs: React.FC<ProgramsProps> = ({ searchQuery }) => {
  const programs = [
    {
      id: 1,
      title: 'Strength Training',
      description: 'Build muscle and increase power with our comprehensive strength training programs.',
      image: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '60 min',
      level: 'All Levels',
      participants: '8-12'
    },
    {
      id: 2,
      title: 'HIIT Cardio',
      description: 'High-intensity interval training to maximize fat burn and cardiovascular health.',
      image: 'https://images.pexels.com/photos/4164762/pexels-photo-4164762.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '45 min',
      level: 'Intermediate',
      participants: '10-15'
    },
    {
      id: 3,
      title: 'Yoga & Flexibility',
      description: 'Improve flexibility, balance, and mental clarity through guided yoga sessions.',
      image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '75 min',
      level: 'All Levels',
      participants: '15-20'
    },
    {
      id: 4,
      title: 'CrossFit',
      description: 'Functional fitness training that combines strength, cardio, and agility.',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '60 min',
      level: 'Advanced',
      participants: '6-10'
    },
    {
      id: 5,
      title: 'Boxing Fitness',
      description: 'Learn boxing techniques while getting an intense full-body workout.',
      image: 'https://images.pexels.com/photos/4754149/pexels-photo-4754149.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '50 min',
      level: 'All Levels',
      participants: '8-12'
    },
    {
      id: 6,
      title: 'Pilates',
      description: 'Core-focused workouts that improve posture, flexibility, and body awareness.',
      image: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '55 min',
      level: 'All Levels',
      participants: '12-16'
    }
  ];

  const filteredPrograms = programs.filter(program =>
    program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            OUR <span className="text-green-400">PROGRAMS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our diverse range of fitness programs designed to help you achieve your goals, 
            whether you're a beginner or an elite athlete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-gray-300 mb-4">{program.description}</p>
                
                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="h-4 w-4" />
                    <span>{program.level}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{program.participants}</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No programs found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Programs;