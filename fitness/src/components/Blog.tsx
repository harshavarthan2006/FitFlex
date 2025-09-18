import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Exercises for Building Functional Strength',
      excerpt: 'Discover the most effective compound movements that will improve your everyday activities and athletic performance.',
      author: 'Sarah Johnson',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Strength Training',
      image: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'The Science Behind HIIT: Why High-Intensity Training Works',
      excerpt: 'Learn about the physiological benefits of HIIT and how to maximize your workouts for optimal fat burning.',
      author: 'Mike Rodriguez',
      date: '2025-01-08',
      readTime: '12 min read',
      category: 'Cardio',
      image: 'https://images.pexels.com/photos/4164762/pexels-photo-4164762.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Nutrition Timing: When to Eat for Maximum Performance',
      excerpt: 'Optimize your pre and post-workout nutrition to fuel performance and accelerate recovery.',
      author: 'Emma Davis',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Recovery Strategies for Serious Athletes',
      excerpt: 'Explore advanced recovery techniques including sleep optimization, mobility work, and active recovery methods.',
      author: 'David Chen',
      date: '2025-01-03',
      readTime: '15 min read',
      category: 'Recovery',
      image: 'https://images.pexels.com/photos/3823188/pexels-photo-3823188.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Mind-Muscle Connection: Training Your Brain for Better Results',
      excerpt: 'Understand how mental focus and visualization can dramatically improve your training effectiveness.',
      author: 'Sarah Johnson',
      date: '2025-01-01',
      readTime: '7 min read',
      category: 'Mental Training',
      image: 'https://images.pexels.com/photos/4164762/pexels-photo-4164762.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Building a Home Gym: Essential Equipment Guide',
      excerpt: 'Create an effective workout space at home with our comprehensive guide to selecting the right equipment.',
      author: 'Mike Rodriguez',
      date: '2024-12-28',
      readTime: '11 min read',
      category: 'Equipment',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const categories = ['All', 'Strength Training', 'Cardio', 'Nutrition', 'Recovery', 'Mental Training', 'Equipment'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            FITNESS <span className="text-green-400">BLOG</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights, training tips, and the latest in fitness science to help you 
            achieve your goals faster and smarter.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-green-400 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-green-400 font-semibold text-sm">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center space-x-2 w-fit">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-900/80 text-green-400 px-2 py-1 rounded text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gray-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest fitness tips, workout plans, and exclusive content delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-green-400 hover:bg-green-500 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;