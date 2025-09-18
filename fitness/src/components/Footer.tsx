import React, { useState } from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              STAY <span className="text-green-400">MOTIVATED</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get exclusive workout tips, nutrition advice, and member-only discounts delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex space-x-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-500 text-gray-900 px-6 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Dumbbell className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">Train Tribe</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your life through fitness. Join our tribe of dedicated athletes, fitness enthusiasts, 
              and everyday heroes on their journey to peak performance.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-green-400 text-white hover:text-gray-900 p-3 rounded-lg transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-400 text-white hover:text-gray-900 p-3 rounded-lg transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-400 text-white hover:text-gray-900 p-3 rounded-lg transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-400 text-white hover:text-gray-900 p-3 rounded-lg transition-all duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Personal Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Group Classes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Strength Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">HIIT Classes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Yoga & Pilates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Nutrition Coaching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Recovery Therapy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Corporate Wellness</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-1">Address</p>
                <p>123 Fitness Street<br />Downtown District<br />City, State 12345</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Phone</p>
                <p>(555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <p>info@traintribe.com</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Hours</p>
                <p>Mon-Fri: 5AM - 11PM<br />Sat-Sun: 6AM - 10PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Train Tribe. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Cancellation Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;