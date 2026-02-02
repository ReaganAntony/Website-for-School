import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const StudentsClassrooms = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600', alt: 'Students Studying' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600', alt: 'Group Discussion' },
    { src: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=600', alt: 'Classroom Learning' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600', alt: 'Science Experiment' },
    { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600', alt: 'Teacher Teaching' },
    { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600', alt: 'Interactive Learning' },
    { src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600', alt: 'Computer Class' },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600', alt: 'Reading Session' },
    { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600', alt: 'Library Study' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600', alt: 'Team Project' }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-mint-500 to-mint-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-white hover:text-yellow-300 transition-colors mb-6"
            data-testid="back-to-gallery-btn"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Gallery
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Students in Classrooms</h1>
          <p className="text-xl text-mint-100">Learning experiences and classroom activities</p>
          <p className="text-mint-200 mt-2">{images.length} Photos</p>
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
                data-testid={`classroom-photo-${index}`}
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

export default StudentsClassrooms;
