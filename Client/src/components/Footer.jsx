import deeshaLogo from "../assets/LATEST_LOGO-1-removebg-preview.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="h-24 md:h-32 flex flex-col justify-center mb-4">
              <span className="text-[#c4a55a] text-3xl md:text-4xl mb-1 leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                AAHANA
              </span>
              <span className="text-gray-400 text-xs md:text-sm tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                EXPERT HOMES
              </span>
            </div>
            <p className="text-gray-400 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              Building dreams, creating homes
            </p>
          </div>

          {/* Deesha Constructions Logo (Centered) */}
          <div className="flex flex-col items-center text-center">
            <div className="h-24 md:h-32 flex items-center justify-center mb-4">
              <img
                src={deeshaLogo}
                alt="Deesha Constructions"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              Strategic partner
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:text-right flex flex-col md:items-end">
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contact Us
            </h3>
            <div className="space-y-2 text-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <p>Landmark, Sion-Chunabhatti</p>
              <p>Mumbai, Maharashtra</p>
              <a href="tel:+919820052888" className="block hover:text-[#c4a55a] transition-colors">
                +91 98200 52888
              </a>
              <a href="mailto:info@aahanaexperthomes.com" className="block hover:text-[#c4a55a] transition-colors">
                info@aahanaexperthomes.com
              </a>
            </div>
          </div>
        </div>

        {/* RERA Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <strong>RERA Disclaimer:</strong> This project is registered with MahaRERA. RERA registration number and details are available on the MahaRERA website at https://maharera.mahaonline.gov.in. The contents of this website are for information purposes only and do not constitute an offer or invitation. All specifications, plans, images, and other details are indicative and subject to change without prior notice. Please verify all details with the developer before making any purchase decision. This is not the official website. For official information, please visit the MahaRERA website.
          </p>
          <p className="text-sm text-gray-400 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            © 2026 Aahana Expert Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
