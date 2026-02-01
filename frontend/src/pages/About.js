import React from 'react';
import { GraduationCap, Target, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <GraduationCap size={36} />,
      title: 'Academic Excellence',
      description: 'We strive for the highest standards in education, ensuring every student reaches their full potential.'
    },
    {
      icon: <Target size={36} />,
      title: 'Character Building',
      description: 'Developing moral values, discipline, and strong character in every student.'
    },
    {
      icon: <Award size={36} />,
      title: 'All-Round Development',
      description: 'Encouraging excellence in academics, sports, arts, and extracurricular activities.'
    },
    {
      icon: <Users size={36} />,
      title: 'Community Focus',
      description: 'Building a supportive community that nurtures growth and collaboration.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-500 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About St. Xavier's</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
            A legacy of excellence in education, character building, and holistic development
          </p>
        </div>
      </section>

      {/* School Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/school.jpg" 
                alt="St. Xavier's School Building" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                St. Xavier's Higher Secondary School, Naroda, has been a beacon of educational 
                excellence in the Ahmedabad region. Located in the heart of Naroda, our school 
                has been shaping young minds and building strong characters for years.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe in the holistic development of every child, combining academic rigor 
                with character education, sports, and cultural activities. Our motto "Character • 
                Excellence" reflects our commitment to developing well-rounded individuals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With experienced faculty, modern facilities, and a nurturing environment, we 
                provide the perfect foundation for students to excel in their academic journey 
                and beyond.
              </p>
            </div>
          </div>

          {/* School Details Card */}
          <div className="bg-gradient-to-br from-mint-50 to-sky-50 rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">School Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Full Name:</p>
                <p className="text-gray-700">St. Xavier's Higher Secondary School, Naroda</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Gujarati Name:</p>
                <p className="text-gray-700">સેન્ટ ઝેવિયર્સ સ્કુલ</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Type:</p>
                <p className="text-gray-700">General Education School</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Location:</p>
                <p className="text-gray-700">Naroda, Ahmedabad, Gujarat</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Timings:</p>
                <p className="text-gray-700">Opens 7:00 AM (Monday to Saturday)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Contact:</p>
                <p className="text-gray-700">063582 78466</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-mint-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            What makes us unique
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                data-testid={`value-card-${index}`}
              >
                <div className="text-sky-600 mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl shadow-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To provide quality education that develops the intellectual, physical, emotional, 
              and spiritual potential of every student, preparing them to be responsible and 
              productive members of society with strong moral values and excellent character.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
