import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Trophy, Heart } from 'lucide-react';

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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-sky-400 via-sky-300 to-mint-200">
        <div className="absolute inset-0">
          <img 
            src="/school.jpg" 
            alt="St. Xavier's School" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">
              St. Xavier's Higher Secondary School
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-2">સેન્ટ ઝેવિયર્સ સ્કુલ</p>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Naroda, Ahmedabad</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/about" 
                className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-colors shadow-lg"
                data-testid="learn-more-btn"
              >
                Learn More About Us
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                data-testid="contact-us-btn"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Why Choose St. Xavier's?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Character • Excellence
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-sky-50 to-mint-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                data-testid={`feature-card-${index}`}
              >
                <div className="text-sky-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-br from-mint-100 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Welcome to St. Xavier's
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At St. Xavier's Higher Secondary School, Naroda, we are committed to providing 
                quality education that nurtures both academic excellence and character development. 
                Our dedicated faculty and comprehensive curriculum ensure that every student receives 
                the best possible foundation for their future.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With a focus on holistic development, we encourage our students to excel not just 
                in academics, but also in sports, arts, and social activities. Join us in shaping 
                bright futures!
              </p>
              <Link 
                to="/about" 
                className="inline-block bg-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors"
                data-testid="read-more-btn"
              >
                Read More About Us
              </Link>
            </div>
            <div>
              <img 
                src="/school.jpg" 
                alt="School Building" 
                className="rounded-2xl shadow-2xl w-full"
              />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Join Our School Community
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Experience quality education and holistic development at St. Xavier's
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-sky-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-sky-700 transition-colors shadow-lg"
            data-testid="get-in-touch-btn"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
