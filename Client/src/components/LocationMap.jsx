import { motion } from 'motion/react';

export function LocationMap() {
  const locations = [
    { name: 'Chunabhatti Station', distance: '0.5 km' },
    { name: 'Bandra Kurla Complex (BKC)', distance: '4 km' },
    { name: 'Kurla Terminus', distance: '2 km' },
    { name: 'Sion Fort', distance: '1.5 km' },
    { name: 'K.J. Somaiya Medical College', distance: '3 km' },
    { name: 'Mahim Nature Park', distance: '3.5 km' }
  ];

  return (
    <section id="location" className="py-20 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Prime <span className="text-[#2c3820]">Location</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Strategically located in Sion-Chunabhatti with excellent connectivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl h-full"
          >
            <div className="relative h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5842848644193!2d72.8756!3d19.0432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f6c6c6c6c7%3A0x1234567890abcdef!2sSion%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Connectivity */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nearby Landmarks
            </h3>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between group hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#2c3820]/10 p-3 rounded-full group-hover:bg-[#2c3820]/20 transition-colors duration-300">
                      <svg className="w-6 h-6 text-[#2c3820]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {location.name}
                    </span>
                  </div>
                  <span className="text-[#d7bc73] font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {location.distance}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
