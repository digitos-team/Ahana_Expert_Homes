import { useState } from 'react';
import { motion } from 'motion/react';

export function Specifications() {
  const [openSection, setOpenSection] = useState('flooring');

  const specifications = [
    {
      id: 'flooring',
      title: 'Flooring',
      details: 'Premium vitrified tiles in living room, dining, bedrooms, and kitchen. Anti-skid ceramic tiles in toilets and balconies.'
    },
    {
      id: 'kitchen',
      title: 'Kitchen',
      details: 'Granite platform with stainless steel sink. Dado tiles up to 2 feet above platform. Provision for water purifier and exhaust fan.'
    },
    {
      id: 'toilet',
      title: 'Toilet',
      details: 'Premium quality sanitary ware and CP fittings. Designer tiles up to door height. Concealed plumbing with hot and cold water supply.'
    },
    {
      id: 'doors',
      title: 'Doors & Windows',
      details: 'Main door with premium finish and safety lock. Internal doors with elegant design. UPVC/Aluminum windows with MS grills.'
    },
    {
      id: 'electrical',
      title: 'Electrical',
      details: 'Concealed copper wiring with modular switches. Adequate light and power points. TV and telephone points in living room and bedrooms.'
    },
    {
      id: 'finishing',
      title: 'Finishing',
      details: 'Smooth interior walls with premium emulsion paint. Exterior with weather-resistant paint. False ceiling in living room.'
    },
    {
      id: 'windows',
      title: 'Safety & Security',
      details: 'CCTV surveillance in common areas. Video door phone in each unit. Fire fighting equipment on all floors.'
    }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Technical <span className="text-[#2c3820]">Specifications</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Quality construction with premium materials and finishes
          </p>
        </motion.div>

        <div className="space-y-4">
          {specifications.map((spec, index) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F8F5F0] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleSection(spec.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-xl font-semibold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {spec.title}
                </span>
                <svg
                  className={`w-6 h-6 text-[#2c3820] transition-transform duration-300 ${
                    openSection === spec.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openSection === spec.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {spec.details}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
