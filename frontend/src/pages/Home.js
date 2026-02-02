import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Trophy, Heart, Award, Target, Sparkles, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <BookOpen size={40} />,
      title: 'Quality Education',
      description: 'Comprehensive curriculum focused on holistic development'
    },
    {
      icon: <Users size={40} />,
      title: 'Expert Faculty',
      description: 'Experienced and dedicated teachers committed to excellence'
    },
    {
      icon: <Trophy size={40} />,
      title: 'Achievements',
      description: 'Outstanding academic and co-curricular achievements'
    },
    {
      icon: <Heart size={40} />,
      title: 'Value Education',
      description: 'Building character and moral values in every student'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Students' },
    { number: '50+', label: 'Expert Teachers' },
    { number: '20+', label: 'Years of Excellence' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div>
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img 
            src="/school.jpg" 
            alt="St. Xavier's School" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/95 via-sky-800/90 to-transparent"></div>
        </div>

        {/* Animated decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-2 mb-8">
              <Sparkles size={20} className="text-yellow-400 mr-2" />
              <span className="text-yellow-300 font-semibold">Character • Excellence</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              St. Xavier's Higher Secondary School
            </h1>
            
            <p className="text-xl sm:text-2xl text-sky-100 mb-4">
              Naroda, Ahmedabad
            </p>

            <p className="text-lg sm:text-xl text-sky-200 mb-10 leading-relaxed max-w-2xl">
              Empowering minds, building futures. Join us in a journey of academic excellence, 
              character development, and holistic growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about" 
                className="group inline-flex items-center justify-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                data-testid="learn-more-btn"
              >
                Explore Our School
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
                data-testid="contact-us-btn"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-yellow-900 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-sky-100 rounded-full px-6 py-2 mb-4">
              <Award size={20} className="text-sky-600 mr-2" />
              <span className="text-sky-700 font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Excellence in Every Aspect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Providing world-class education with a focus on values and character
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-white to-sky-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-sky-100 hover:scale-105"
                data-testid={`feature-card-${index}`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-3xl"></div>
                <div className="relative">
                  <div className="text-sky-600 mb-4 transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-sky-50 via-white to-mint-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-mint-100 rounded-full px-6 py-2 mb-6">
                <Target size={20} className="text-mint-600 mr-2" />
                <span className="text-mint-700 font-semibold">Our Mission</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nurturing Tomorrow's Leaders
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At St. Xavier's Higher Secondary School, Naroda, we believe in transforming lives 
                through quality education. Our comprehensive curriculum, combined with experienced 
                faculty, ensures every student receives the guidance they need to excel.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We focus on holistic development - nurturing not just academic excellence, but also 
                character, leadership, creativity, and social responsibility. Our students are 
                prepared to face the challenges of tomorrow with confidence and integrity.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-semibold text-gray-800">Modern Infrastructure</span>
                </div>
                <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="font-semibold text-gray-800">Smart Classrooms</span>
                </div>
                <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="font-semibold text-gray-800">Sports Facilities</span>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transition-all shadow-lg hover:shadow-xl"
                data-testid="read-more-btn"
              >
                Learn More About Us
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-sky-200 to-mint-200 rounded-3xl"></div>
                <img 
                  src="/school.jpg" 
                  alt="School Building" 
                  className="relative rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-3xl p-8 shadow-xl max-w-xs">
                  <p className="text-gray-900 font-bold text-lg">
                    "Education is the most powerful weapon which you can use to change the world."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Desk Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              From the Principal's Desk
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-sky-50 to-mint-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600" 
                    alt="Principal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 px-6 py-3 rounded-full shadow-lg">
                  <p className="font-bold text-gray-800">Principal</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-sky-600 font-semibold mb-6 text-lg">M.A., B.Ed., Ph.D.</p>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Dear Parents and Students,
                </p>
                <p>
                  Welcome to St. Xavier's Higher Secondary School, Naroda. Our mission is to provide 
                  quality education that builds strong character and prepares students for a bright future. 
                  We believe in the holistic development of every child through discipline, values, and 
                  excellence in academics and extracurricular activities.
                </p>
                <p>
                  Together, let us nurture young minds to become responsible citizens and future leaders 
                  of our nation.
                </p>
                <p className="font-semibold text-gray-800 italic mt-6">
                  "Education is not preparation for life; education is life itself."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-24 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
            Experience quality education and holistic development at St. Xavier's. 
            Enroll today and give your child the best foundation for tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              data-testid="get-in-touch-btn"
            >
              Get In Touch
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              to="/notice" 
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
            >
              View Notices
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
