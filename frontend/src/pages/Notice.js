import React from 'react';
import { Calendar, BookOpen, Trophy, Drama, BookMarked, Bell } from 'lucide-react';

const Notice = () => {
  const notices = [
    {
      icon: <BookOpen size={32} />,
      iconColor: 'text-red-600',
      bgColor: 'from-red-50 to-orange-50',
      title: 'Unit Test Starts from 10 March 2026',
      date: 'Posted: 25 February 2026',
      description: 'Unit tests for all classes will commence from 10th March 2026. Students are advised to prepare well and complete their revision.'
    },
    {
      icon: <Trophy size={32} />,
      iconColor: 'text-green-600',
      bgColor: 'from-green-50 to-mint-50',
      title: 'Sports Day on 25 March 2026',
      date: 'Posted: 1 March 2026',
      description: 'Annual Sports Day celebration will be held on 25th March 2026. All students must report by 7:30 AM in their house sports uniform.'
    },
    {
      icon: <Drama size={32} />,
      iconColor: 'text-purple-600',
      bgColor: 'from-purple-50 to-pink-50',
      title: 'Annual Day Rehearsal from 5 April 2026',
      date: 'Posted: 28 March 2026',
      description: 'Annual Day rehearsals will start from 5th April 2026. Participating students should attend regularly and bring their costumes.'
    },
    {
      icon: <BookMarked size={32} />,
      iconColor: 'text-blue-600',
      bgColor: 'from-blue-50 to-sky-50',
      title: 'Holiday Homework Submission Date',
      date: 'Posted: 15 March 2026',
      description: 'All holiday homework must be submitted by 20th April 2026. Late submissions will not be accepted. Complete all assignments neatly.'
    },
    {
      icon: <Calendar size={32} />,
      iconColor: 'text-yellow-600',
      bgColor: 'from-yellow-50 to-orange-50',
      title: 'Parent-Teacher Meeting Scheduled',
      date: 'Posted: 10 March 2026',
      description: 'Parent-Teacher meeting for all classes will be held on 15th April 2026 from 9:00 AM to 1:00 PM. Parents are requested to attend.'
    },
    {
      icon: <Bell size={32} />,
      iconColor: 'text-sky-600',
      bgColor: 'from-sky-50 to-mint-50',
      title: 'School Timings Update',
      date: 'Posted: 5 March 2026',
      description: 'From 1st April 2026, summer timings will be effective. School will start at 7:00 AM and end at 12:30 PM for all classes.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full">
              <Bell size={48} className="text-orange-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">School Notices</h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Stay updated with important announcements and upcoming events
          </p>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-mint-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600">
              Important notices for students and parents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {notices.map((notice, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${notice.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8`}
                data-testid={`notice-card-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${notice.iconColor} flex-shrink-0`}>
                    {notice.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {notice.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">{notice.date}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {notice.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
            <div className="flex items-start space-x-4">
              <Bell size={28} className="text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Stay Informed
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Please check this notice board regularly for updates. For urgent queries, 
                  contact the school office at <a href="tel:06358278466" className="text-sky-600 hover:text-sky-700 font-semibold">063582 78466</a> or 
                  email us at <a href="mailto:info@stxaviersnaroda.edu.in" className="text-sky-600 hover:text-sky-700 font-semibold">info@stxaviersnaroda.edu.in</a>.
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
            Have Questions?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact us for more information about any notice
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:06358278466" 
              className="inline-block bg-sky-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-sky-700 transition-colors shadow-lg"
              data-testid="notice-call-btn"
            >
              Call: 063582 78466
            </a>
            <a 
              href="mailto:info@stxaviersnaroda.edu.in" 
              className="inline-block bg-white text-sky-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              data-testid="notice-email-btn"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notice;
