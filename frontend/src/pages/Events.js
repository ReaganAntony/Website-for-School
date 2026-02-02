import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Annual Day Celebration',
      date: 'March 15, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'School Auditorium',
      description: 'Join us for our grand annual day celebration featuring cultural performances, prize distribution, and more.'
    },
    {
      title: 'Inter-School Sports Meet',
      date: 'March 22-24, 2025',
      time: '8:00 AM - 4:00 PM',
      location: 'School Sports Ground',
      description: 'Three-day sports competition featuring athletics, football, cricket, and various other sports.'
    },
    {
      title: 'Science Exhibition',
      date: 'April 5, 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'Science Labs',
      description: 'Students showcase their innovative science projects and experiments.'
    },
    {
      title: 'Parent-Teacher Meeting',
      date: 'April 12, 2025',
      time: '9:00 AM - 1:00 PM',
      location: 'Respective Classrooms',
      description: 'Individual meetings with teachers to discuss student progress and development.'
    }
  ];

  const pastEvents = [
    {
      title: 'Republic Day Celebration',
      date: 'January 26, 2025',
      description: 'Flag hoisting ceremony, cultural programs, and patriotic celebrations.'
    },
    {
      title: 'Winter Carnival',
      date: 'January 15, 2025',
      description: 'Fun-filled day with games, food stalls, and entertainment activities.'
    },
    {
      title: 'Christmas Celebration',
      date: 'December 24, 2024',
      description: 'Carol singing, Christmas decorations, and festive celebrations.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mint-400 to-mint-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">School Events</h1>
          <p className="text-xl md:text-2xl text-mint-100 max-w-3xl mx-auto">
            Stay updated with our upcoming activities and past celebrations
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Mark your calendars for these exciting events!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-sky-50 to-mint-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8"
                data-testid={`upcoming-event-${index}`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar size={20} className="mr-3 text-sky-600" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock size={20} className="mr-3 text-sky-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin size={20} className="mr-3 text-sky-600" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-mint-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            Past Events
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Highlights from our recent celebrations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8"
                data-testid={`past-event-${index}`}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                <div className="flex items-center text-sky-600 font-medium mb-4">
                  <Calendar size={18} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact us for more information about our events and activities
          </p>
          <a 
            href="tel:90162 96969" 
            className="inline-block bg-sky-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-sky-700 transition-colors shadow-lg"
            data-testid="call-us-btn"
          >
            Call Us: 90162 96969
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;
