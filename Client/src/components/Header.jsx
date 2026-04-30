import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#2c3820] shadow-2xl' : 'bg-[#2c3820]/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="text-[#c4a55a] font-bold text-xl tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                AAHANA
              </span>
              <span className="text-white text-xs tracking-widest font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                EXPERT HOMES
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('overview')} className="text-white hover:text-[#d7bc73] transition-colors font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Overview
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-white hover:text-[#d7bc73] transition-colors font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Amenities
            </button>
            <button onClick={() => scrollToSection('floor-plans')} className="text-white hover:text-[#d7bc73] transition-colors font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Floor Plans
            </button>
            <button onClick={() => scrollToSection('location')} className="text-white hover:text-[#d7bc73] transition-colors font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Location
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#d7bc73] transition-colors font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contact
            </button>
          </nav>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919820606049" className="flex items-center text-white hover:text-[#d7bc73] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>+91 9820606049</span>
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-form'))}
              className="btn-gold text-[#2c3820] px-6 py-2.5 rounded-full font-semibold shadow-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2c3820] border-t border-[#d7bc73]/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => scrollToSection('overview')} className="block w-full text-left text-white hover:text-[#d7bc73] py-2 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Overview
            </button>
            <button onClick={() => scrollToSection('amenities')} className="block w-full text-left text-white hover:text-[#d7bc73] py-2 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Amenities
            </button>
            <button onClick={() => scrollToSection('floor-plans')} className="block w-full text-left text-white hover:text-[#d7bc73] py-2 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Floor Plans
            </button>
            <button onClick={() => scrollToSection('location')} className="block w-full text-left text-white hover:text-[#d7bc73] py-2 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Location
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-[#d7bc73] py-2 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contact
            </button>
            <a href="tel:+919820606049" className="block w-full text-left text-[#d7bc73] py-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              📞 +91 9820606049
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
