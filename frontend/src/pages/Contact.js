import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-500 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 bg-gradient-to-br from-sky-50 to-mint-50 p-6 rounded-2xl">
                  <div className="bg-sky-600 p-3 rounded-full flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Kathwada Rd, Nr. Deepnagar, New India Colony,<br />
                      Vasant Vihar 2, Nava Naroda,<br />
                      Ahmedabad, Gujarat 382330
                    </p>
                    <p className="text-gray-600 mt-2 text-sm">Plus Code: 3MCC+22 Ahmedabad, Gujarat</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 bg-gradient-to-br from-mint-50 to-sky-50 p-6 rounded-2xl">
                  <div className="bg-mint-600 p-3 rounded-full flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">Phone</h3>
                    <a 
                      href="tel:90162 96969" 
                      className="text-sky-600 hover:text-sky-700 font-medium text-xl"
                      data-testid="phone-link"
                    >
                      90162 96969
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 bg-gradient-to-br from-yellow-50 to-mint-50 p-6 rounded-2xl">
                  <div className="bg-yellow-500 p-3 rounded-full flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">Email</h3>
                    <a 
                      href="mailto:stxaviersnaroda@gmail.com" 
                      className="text-sky-600 hover:text-sky-700 font-medium text-lg"
                      data-testid="email-link"
                    >
                      stxaviersnaroda@gmail.com
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start space-x-4 bg-gradient-to-br from-sky-50 to-yellow-50 p-6 rounded-2xl">
                  <div className="bg-sky-500 p-3 rounded-full flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">School Timings</h3>
                    <p className="text-gray-700">
                      <span className="font-medium">Monday - Saturday:</span> Opens at 7:00 AM
                    </p>
                    <p className="text-gray-700 mt-1">
                      <span className="font-medium">Sunday:</span> Closed
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-sky-50 to-mint-50 p-6 rounded-2xl">
                  <h3 className="font-semibold text-gray-800 text-lg mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.youtube.com/@stxavierschool6593" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-4 rounded-full hover:bg-sky-50 transition-colors shadow-md"
                      data-testid="youtube-link"
                    >
                      <Youtube size={28} className="text-red-600" />
                    </a>
                    <a 
                      href="https://www.instagram.com/stxaviersnaroda2005/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-4 rounded-full hover:bg-sky-50 transition-colors shadow-md"
                      data-testid="instagram-social-link"
                    >
                      <Instagram size={28} className="text-pink-600" />
                    </a>
                    <a 
                      href="https://www.facebook.com/st.xaviershighschoolnaroda/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-4 rounded-full hover:bg-sky-50 transition-colors shadow-md"
                      data-testid="facebook-social-link"
                    >
                      <Facebook size={28} className="text-blue-600" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Follow us on social media for updates, announcements, and event highlights
                  </p>
                </div>
              </div>
            </div>

            {/* School Image */}
            <div>
              <img 
                src="/school.jpg" 
                alt="St. Xavier's School" 
                className="rounded-2xl shadow-2xl w-full mb-8"
              />
              <img 
                src="/logo.jpg" 
                alt="School Logo" 
                className="rounded-2xl shadow-xl w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-mint-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            Find Us On Map
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Visit us at our location in Naroda, Ahmedabad
          </p>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" data-testid="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.8714844247946!2d72.6695!3d23.0700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzEyLjAiTiA3MsKwNDAnMTAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="St. Xavier's School Location"
            ></iframe>
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
            Feel free to call us, email us, or visit our school during working hours
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:06358278466" 
              className="inline-block bg-sky-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-sky-700 transition-colors shadow-lg"
              data-testid="call-now-btn"
            >
              Call: 063582 78466
            </a>
            <a 
              href="mailto:info@stxaviersnaroda.edu.in" 
              className="inline-block bg-white text-sky-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              data-testid="email-now-btn"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
