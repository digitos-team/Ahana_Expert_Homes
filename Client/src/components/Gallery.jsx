import { useState } from 'react';
import { motion } from 'motion/react';
import gymImage from '../assets/gymnasium.jpeg';
import kidsAreaImage from '../assets/Kids_playing_are.jpeg';
import conferenceImage from '../assets/Luxury conference.jpeg';
import rooftopGardenImage from '../assets/rooftop_garden.jpeg';
import terracePartyImage from '../assets/terrace_party_are.jpeg';
import towerParkingImage from '../assets/tower_parking.jpeg';

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    {
      url: gymImage,
      title: 'Gymnasium'
    },
    {
      url: kidsAreaImage,
      title: 'Children Playing Area'
    },
    {
      url: rooftopGardenImage,
      title: 'Rooftop Garden'
    },
    {
      url: conferenceImage,
      title: 'Luxury Conference Room'
    },
    {
      url: terracePartyImage,
      title: 'Terrace Party Area'
    },
    {
      url: towerParkingImage,
      title: 'Tower Parking'
    }
  ];

  const openLightbox = (url) => {
    setSelectedImage(url);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Gallery & <span className="text-[#2c3820]">Virtual Tour</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Explore the stunning visuals of Landmark
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-semibold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#c4a55a] transition-colors"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
