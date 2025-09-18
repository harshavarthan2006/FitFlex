import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import PersonalTraining from './components/PersonalTraining';
import Trainers from './components/Trainers';
import BMICalculator from './components/BMICalculator';
import WorkoutPlanner from './components/WorkoutPlanner';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <Programs searchQuery={searchQuery} />
            <BMICalculator />
            <Trainers />
            <Testimonials />
          </>
        );
      case 'about':
        return <About />;
      case 'programs':
        return <Programs searchQuery={searchQuery} />;
      case 'personal-training':
        return <PersonalTraining />;
      case 'nutrition':
        return <About />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'bmi-calculator':
        return <BMICalculator />;
      case 'workout-planner':
        return <WorkoutPlanner />;
      default:
        return (
          <>
            <Hero />
            <Programs searchQuery={searchQuery} />
            <BMICalculator />
            <Trainers />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main>
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;