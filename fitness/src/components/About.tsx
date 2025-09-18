import React from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ABOUT <span className="text-green-400">TRAIN TRIBE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            More than a gym - we're a community dedicated to transforming lives through fitness, 
            nutrition, and unwavering support.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Train Tribe, we believe that fitness is not just about physical transformation - 
              it's about building confidence, discipline, and a community of like-minded individuals 
              who push each other to achieve greatness.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We provide world-class facilities, expert guidance, and personalized programs to help 
              you reach your fitness goals, regardless of your starting point.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Train Tribe Facility"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-800 rounded-xl p-8">
              <Target className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do, from our equipment to our service.
              </p>
            </div>
            <div className="text-center bg-gray-800 rounded-xl p-8">
              <Heart className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <p className="text-gray-300">
                Building a supportive community where everyone feels welcome and motivated.
              </p>
            </div>
            <div className="text-center bg-gray-800 rounded-xl p-8">
              <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Results</h3>
              <p className="text-gray-300">
                Focused on delivering real, measurable results for every member.
              </p>
            </div>
            <div className="text-center bg-gray-800 rounded-xl p-8">
              <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Support</h3>
              <p className="text-gray-300">
                Providing unwavering support and guidance throughout your fitness journey.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-800 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">2,500+</div>
              <div className="text-gray-300">Members Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50,000+</div>
              <div className="text-gray-300">Workouts Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">5</div>
              <div className="text-gray-300">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-12">World-Class Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
                alt="Strength Training Area"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
                <h3 className="text-white font-bold text-xl p-4">Strength Training</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
                alt="Cardio Zone"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
                <h3 className="text-white font-bold text-xl p-4">Cardio Zone</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
                alt="Group Classes"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
                <h3 className="text-white font-bold text-xl p-4">Group Classes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;