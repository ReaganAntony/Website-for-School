import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Activities = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600', alt: 'Art Class' },
    { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600', alt: 'Debate Competition' },
    { src: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600', alt: 'Science Fair' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600', alt: 'Quiz Competition' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600', alt: 'Drama Rehearsal' },
    { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600', alt: 'Music Class' },
    { src: 'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=600', alt: 'Yoga Session' },
    { src: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600', alt: 'Field Trip' },
    { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600', alt: 'Workshop' },
    { src: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600', alt: 'Community Service' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600', alt: 'Team Building' }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-white hover:text-yellow-300 transition-colors mb-6"
            data-testid="back-to-gallery-btn"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Gallery
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Activities</h1>
          <p className="text-xl text-orange-100">Co-curricular activities and student engagement</p>
          <p className="text-orange-200 mt-2">{images.length} Photos</p>
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
                data-testid={`activities-photo-${index}`}
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

export default Activities;
