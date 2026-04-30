import { motion } from "motion/react";
import deeshaLogo from "../assets/LATEST_LOGO-1-removebg-preview.png";
import brochurePdf from "../assets/Landmark-Brochure_Olive&green.pdf";
import entranceLobby from "../assets/entrance_lobby.jpeg";


export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${entranceLobby})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-[#1A1A1A]/50 to-transparent"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Deesha Constructions Logo with Integrated Background Band */}
          <div className="relative mb-8 inline-block">
            {/* Background Band - Locked to Logo center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-28 md:h-32 white-gradient-band transform rotate-[-2deg] pointer-events-none origin-center"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative z-10"
            >
              <img
                src={deeshaLogo}
                alt="Deesha Constructions - Building Success Together"
                className="h-24 md:h-32 w-auto object-contain drop-shadow-lg"
              />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl mb-6 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Elevation That
            <br />
            <span className="text-gold-gradient">Redefines</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Exclusive 1BHK, 2BHK & Jodi Flats | Sion-Chunabhatti, Mumbai
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={brochurePdf}
              download="Landmark-Brochure_Olive&green.pdf"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#2c3820] text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg text-center inline-block"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Download Brochure
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-form'))}
              className="btn-gold text-[#2c3820] px-8 py-4 rounded-full font-semibold text-lg shadow-xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Book a Site Visit
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
