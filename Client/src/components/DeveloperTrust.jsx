import { motion } from 'motion/react';

export function DeveloperTrust() {
  const trustPoints = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'RERA Compliant',
      description: 'Fully registered and compliant with all regulatory requirements'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Transparent Process',
      description: 'Clear communication and transparent dealings at every step'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'End-to-End Support',
      description: 'Complete assistance from booking to possession and beyond'
    }
  ];

  return (
    <section className="py-20 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center mb-6">
            <div className="flex flex-col items-center">
              <span className="text-[#c4a55a] text-4xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                AAHANA
              </span>
              <span className="text-gray-600 tracking-widest text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                EXPERT HOMES
              </span>
            </div>
          </div>
          <p className="text-2xl text-gray-700 italic max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            "Your dream isn't just welcomed — it's brought to life."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-[#2c3820] mb-6 flex justify-center">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {point.title}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
