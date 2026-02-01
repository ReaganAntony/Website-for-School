import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-600 to-sky-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.jpg" 
                alt="St. Xavier's Logo" 
                className="h-16 w-16 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-xl font-bold">St. Xavier's</h3>
                <p className="text-sky-100">સેન્ટ ઝેવિયર્સ સ્કુલ</p>
              </div>
            </div>
            <p className="text-sky-100 text-sm">
              Character • Excellence
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p className="text-sky-100">
                  Kathwada Rd, Nr. Deepnagar, New India Colony, Vasant Vihar 2, 
                  Nava Naroda, Ahmedabad, Gujarat 382330
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <p className="text-sky-100">063582 78466</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <p className="text-sky-100">Mon-Sat: 7:00 AM onwards</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-sky-600 p-3 rounded-full hover:bg-sky-100 transition-colors"
                data-testid="instagram-link"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-sky-600 p-3 rounded-full hover:bg-sky-100 transition-colors"
                data-testid="facebook-link"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sky-500 mt-8 pt-6 text-center text-sm text-sky-100">
          <p>© {new Date().getFullYear()} St. Xavier's Higher Secondary School, Naroda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
