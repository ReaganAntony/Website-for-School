import React from 'react';

const Gallery = () => {
  // Using placeholder images - will be replaced with real photos
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500',
      alt: 'School Building Exterior',
      category: 'Campus'
    },
    {
      src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500',
      alt: 'Classroom',
      category: 'Academics'
    },
    {
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500',
      alt: 'Sports Day',
      category: 'Sports'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      alt: 'Cultural Program',
      category: 'Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500',
      alt: 'Science Lab',
      category: 'Academics'
    },
    {
      src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500',
      alt: 'Library',
      category: 'Campus'
    },
    {
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500',
      alt: 'Annual Day',
      category: 'Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=500',
      alt: 'Students in Classroom',
      category: 'Academics'
    },
    {
      src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=500',
      alt: 'Sports Activities',
      category: 'Sports'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Glimpses of life at St. Xavier's - our campus, events, and activities
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-mint-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                data-testid={`gallery-image-${index}`}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-semibold text-lg">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-semibold text-sky-600">Note:</span> These are placeholder images. 
                The actual gallery will feature real photos of our school campus, events, students, 
                and activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Videos
          </h2>
          
          <div className="bg-gradient-to-br from-sky-100 to-mint-100 rounded-2xl shadow-lg p-12 text-center">
            <p className="text-xl text-gray-700 mb-6">
              Video content coming soon! Stay tuned for event highlights and school tours.
            </p>
            <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-gray-600">
                We'll be adding videos of our annual day celebrations, sports events, 
                cultural programs, and virtual campus tours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
