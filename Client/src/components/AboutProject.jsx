import { motion } from 'motion/react';
import buildingImage from '../assets/Building_Image.jpeg';

export function AboutProject() {
  return (
    <section className="py-20 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={buildingImage}
                alt="Landmark Building"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute bottom-0 lg:-bottom-6 right-0 lg:-right-6 w-32 h-32 bg-[#2c3820] rounded-2xl transform rotate-12 -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              About <span className="text-[#2c3820]">Landmark</span>
            </h2>

            <div className="space-y-4 text-gray-700 mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <p>
                Nestled in the vibrant heart of Sion-Chunabhatti, <strong>Landmark</strong> represents the pinnacle of modern urban living. This exclusive residential project by Aahana Expert Homes brings you thoughtfully designed 1BHK and 2BHK apartments that redefine luxury.
              </p>
              <p>
                Experience the perfect blend of connectivity and serenity. With seamless access to Mumbai's key business districts, top educational institutions, and entertainment hubs, Landmark offers a lifestyle that's as aspirational as it is practical.
              </p>
              <p>
                Every corner of Landmark has been crafted with attention to detail, from the grand designer lobby to the tranquil rooftop gardens, ensuring your home is a sanctuary you'll never want to leave.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="gold-border-gradient pl-6 py-4 bg-white/50 rounded-r-lg">
              <p className="text-xl italic text-[#2c3820]" style={{ fontFamily: 'Playfair Display, serif' }}>
                "Where every sunrise brings new possibilities, and every sunset feels like coming home."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
