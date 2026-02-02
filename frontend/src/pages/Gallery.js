import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'lucide-react';

const Gallery = () => {
  const categories = [
    {
      title: 'Sports Day',
      slug: 'sports-day',
      description: 'Exciting moments from our annual sports competitions',
      coverImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600',
      photoCount: 12
    },
    {
      title: 'Annual Day',
      slug: 'annual-day',
      description: 'Grand celebrations and memorable performances',
      coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
      photoCount: 15
    },
    {
      title: 'Students in Classrooms',
      slug: 'students-classrooms',
      description: 'Learning experiences and classroom activities',
      coverImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600',
      photoCount: 10
    },
    {
      title: 'Cultural Events',
      slug: 'cultural-events',
      description: 'Festivals, celebrations, and cultural programs',
      coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600',
      photoCount: 14
    },
    {
      title: 'Activities',
      slug: 'activities',
      description: 'Co-curricular activities and student engagement',
      coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
      photoCount: 11
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Explore our memories organized by categories
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-mint-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center">
            Click on any category to view photos
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={`/gallery/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                data-testid={`gallery-category-${category.slug}`}
              >
                <div className="relative h-80">
                  <img 
                    src={category.coverImage}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center mb-2">
                      <Image size={20} className="text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-medium">{category.photoCount} Photos</span>
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">{category.title}</h3>
                    <p className="text-gray-200 text-sm">{category.description}</p>
                  </div>

                  <div className="absolute top-4 right-4 bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Gallery →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-semibold text-sky-600">Note:</span> These are placeholder images. 
                Click any category to explore the collection. Real photos will be added soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
