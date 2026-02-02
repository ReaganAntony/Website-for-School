import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CulturalEvents = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600', alt: 'Cultural Dance' },
    { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600', alt: 'Traditional Festival' },
    { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600', alt: 'Music Performance' },
    { src: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600', alt: 'Folk Dance' },
    { src: 'https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=600', alt: 'Diwali Celebration' },
    { src: 'https://images.unsplash.com/photo-1545128485-c400e7702796?w=600', alt: 'Navratri Garba' },
    { src: 'https://images.unsplash.com/photo-1578926375605-eaf734a7ca5a?w=600', alt: 'Independence Day' },
    { src: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?w=600', alt: 'Republic Day' },
    { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600', alt: 'Musical Event' },
    { src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=600', alt: 'Art Exhibition' },
    { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600', alt: 'Cultural Show' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600', alt: 'Guest Performance' },
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600', alt: 'Stage Program' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600', alt: 'Group Performance' }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-white hover:text-yellow-300 transition-colors mb-6"
            data-testid="back-to-gallery-btn"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Gallery
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Cultural Events</h1>
          <p className="text-xl text-purple-100">Festivals, celebrations, and cultural programs</p>
          <p className="text-purple-200 mt-2">{images.length} Photos</p>
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
                data-testid={`cultural-photo-${index}`}
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

export default CulturalEvents;
