import buildingImage from '../assets/Building_Image.jpeg';

export function FinalCTA() {
  const handleBookNow = () => {
    window.dispatchEvent(new CustomEvent('open-enquiry-form'));
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${buildingImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c3820]/95 via-[#2c3820]/90 to-[#0F2340]/90"></div>
      </div>

      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/3 h-full gold-gradient-band transform skew-x-12 origin-top-right"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Your Dream Home <span className="text-gold-gradient">Awaits</span>
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Take the first step towards owning your perfect home in Mumbai's most promising location
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleBookNow}
            className="bg-white text-[#2c3820] hover:text-[#2c3820] px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-2xl hover:scale-105 hover:gold-gradient"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Book Now
          </button>
          <a
            href="tel:+919820606049"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2c3820] px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg flex items-center gap-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-white text-lg mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Sion-Chunabhatti, Mumbai, Maharashtra
          </p>
          <a href="tel:+919820606049" className="text-[#d7bc73] text-2xl font-semibold hover:text-white transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            +91 9820606049
          </a>
        </div>
      </div>
    </section>
  );
}
