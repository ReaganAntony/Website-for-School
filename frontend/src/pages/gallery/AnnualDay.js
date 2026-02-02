import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AnnualDay = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600', alt: 'Stage Performance' },
    { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600', alt: 'Dance Performance' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', alt: 'Cultural Show' },
    { src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600', alt: 'Music Performance' },
    { src: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?w=600', alt: 'Drama Performance' },
    { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600', alt: 'Prize Distribution Ceremony' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600', alt: 'Chief Guest Speech' },
    { src: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600', alt: 'Group Performance' },
    { src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600', alt: 'Welcome Dance' },
    { src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600', alt: 'Award Winners' },
    { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600', alt: 'Students on Stage' },
    { src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600', alt: 'Audience Applause' },
    { src: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=600', alt: 'Grand Finale' },
    { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600', alt: 'Group Photo' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600', alt: 'Team Celebration' }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-white hover:text-sky-300 transition-colors mb-6"
            data-testid="back-to-gallery-btn"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Gallery
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Annual Day</h1>
          <p className="text-xl text-yellow-100">Grand celebrations and memorable performances</p>
          <p className="text-yellow-200 mt-2">{images.length} Photos</p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-mint-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                data-testid={`annual-day-photo-${index}`}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnualDay;
