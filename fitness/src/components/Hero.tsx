import React from 'react';
import { ArrowRight, Play, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          UNLEASH YOUR
          <span className="text-green-400 block">INNER BEAST</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join Train Tribe and transform your body, mind, and life with our elite fitness programs and world-class trainers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-green-400 hover:bg-green-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>JOIN NOW</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>WATCH INTRO</span>
          </button>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
            BOOK A SESSION
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-300">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
            <div className="text-gray-300">Expert Trainers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;