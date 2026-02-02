import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SportsDay = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600', alt: 'Running Race' },
    { src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600', alt: 'Football Match' },
    { src: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=600', alt: 'Basketball Game' },
    { src: 'https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?w=600', alt: 'Cricket Match' },
    { src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600', alt: 'High Jump' },
    { src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600', alt: 'Long Jump' },
    { src: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600', alt: 'Relay Race' },
    { src: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=600', alt: 'Tug of War' },
    { src: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600', alt: 'Volleyball' },
    { src: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600', alt: 'Prize Distribution' },
    { src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600', alt: 'Team Celebration' },
    { src: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600', alt: 'Sports Day Closing' }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-sky-500 to-sky-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-white hover:text-yellow-300 transition-colors mb-6"
            data-testid="back-to-gallery-btn"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Gallery
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Sports Day</h1>
          <p className="text-xl text-sky-100">Exciting moments from our annual sports competitions</p>
          <p className="text-sky-200 mt-2">{images.length} Photos</p>
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
                data-testid={`sports-photo-${index}`}
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

export default SportsDay;
