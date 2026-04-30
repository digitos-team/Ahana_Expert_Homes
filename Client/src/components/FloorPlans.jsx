import { useState } from 'react';
import { motion } from 'motion/react';
import plan1BHK from '../assets/1_Bhk_floor_plan.png';
import plan2BHK from '../assets/2_BHK_floor_plan.png';
import planJodi from '../assets/Jodi_flat_floor_plan.png';
import jodiFlatImg from '../assets/jodi_flat.jpg';
import pdf1BHK from '../assets/1BHKFloor Plan.pdf';
import pdf2BHK from '../assets/2BHKfloorplan.pdf';
import pdfJodi from '../assets/jodiFlat floorplan.pdf';

export function FloorPlans() {
  const [activeTab, setActiveTab] = useState('1BHK');

  const floorPlans = {
    '1BHK': {
      carpetArea: '450 sq.ft',
      image: 'https://images.unsplash.com/photo-1701789668339-140f67db12df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzU2NDk1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      downloadLink: pdf1BHK,
      features: [
        'Spacious Living Room',
        'Modern Kitchen',
        'Attached Bathroom',
        'Balcony'
      ]
    },
    '2BHK': {
      carpetArea: '650 sq.ft',
      image: 'https://images.unsplash.com/photo-1713832139686-42a1d84ad763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsb2JieSUyMGludGVyaW9yfGVufDF8fHx8MTc3NTY1NjIxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      downloadLink: pdf2BHK,
      features: [
        'Master Bedroom with Attached Bath',
        'Second Bedroom',
        'Living & Dining Area',
        'Modern Kitchen',
        'Two Bathrooms',
        'Large Balcony'
      ]
    },
    'Jodi Flats': {
      carpetArea: '1100 sq.ft',
      image: jodiFlatImg,
      downloadLink: pdfJodi,
      features: [
        'Expansive Living & Dining Area',
        'Multiple Master Bedrooms',
        'Gourmet Kitchen',
        'Multiple Bathrooms',
        'Spacious Balconies',
        'Customizable Layout'
      ]
    }
  };

  return (
    <section id="floor-plans" className="py-20 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Floor <span className="text-[#2c3820]">Plans</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Thoughtfully designed layouts that maximize space and natural light
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg inline-flex">
            <button
              onClick={() => setActiveTab('1BHK')}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
                activeTab === '1BHK'
                  ? 'bg-[#2c3820] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#2c3820]'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              1 BHK
            </button>
            <button
              onClick={() => setActiveTab('2BHK')}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
                activeTab === '2BHK'
                  ? 'bg-[#2c3820] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#2c3820]'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              2 BHK
            </button>
            <button
              onClick={() => setActiveTab('Jodi Flats')}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
                activeTab === 'Jodi Flats'
                  ? 'bg-[#2c3820] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#2c3820]'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Jodi Flats
            </button>
          </div>
        </div>

        {/* Floor Plan Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="relative">
              <img
                src={floorPlans[activeTab].image}
                alt={`${activeTab} Floor Plan`}
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 btn-gold text-[#2c3820] px-4 py-2 rounded-full font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {floorPlans[activeTab].carpetArea}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                {activeTab} Configuration
              </h3>
              <div className="space-y-4 mb-8">
                {floorPlans[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2c3820] rounded-full"></div>
                    <span className="text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={floorPlans[activeTab].downloadLink}
                download={`${activeTab.replace(/\s+/g, '_')}_Floor_Plan.pdf`}
                className="bg-transparent border-2 border-[#2c3820] text-[#2c3820] hover:bg-[#2c3820] hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-semibold w-full lg:w-auto text-center inline-block"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Download Floor Plan
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
