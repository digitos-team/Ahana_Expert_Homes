import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import axios from 'axios';
import { toast } from 'sonner';

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    unitType: '1BHK',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-enquiry-form', handleOpen);
    return () => window.removeEventListener('open-enquiry-form', handleOpen);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final Mobile Validation
    if (formData.mobile.length !== 10) {
      toast.error('Invalid Mobile Number', {
        description: 'Please enter exactly 10 digits.',
      });
      return;
    }

    // Email Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid Email Address', {
        description: 'Please enter a valid email format.',
      });
      return;
    }

    // Message Length Check (if provided)
    if (formData.message && formData.message.length < 5) {
      toast.error('Message too short', {
        description: 'Please provide at least 5 characters.',
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/enquiries', formData);
      if (response.data.success) {
        toast.success('Enquiry Sent Successfully!', {
          description: 'Our team will contact you shortly.',
        });
        setFormData({
          name: '',
          mobile: '',
          email: '',
          unitType: '1BHK',
          message: ''
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to send enquiry', {
        description: error.response?.data?.error || 'Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Strict validation for Mobile (digits only, max 10)
    if (name === 'mobile') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      if (onlyNums.length <= 10) {
        setFormData({ ...formData, [name]: onlyNums });
      }
      return;
    }

    // Strict validation for Name (letters and spaces only)
    if (name === 'name') {
      const onlyLetters = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, [name]: onlyLetters });
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 lg:bottom-10 right-6 lg:right-10 z-[60] w-16 h-16 rounded-full btn-gold shadow-2xl flex items-center justify-center text-[#2c3820] cursor-pointer border-2 border-white/40"
            aria-label="Open Enquiry Form"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Form Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-24 lg:bottom-10 right-6 lg:right-10 z-[60] w-[calc(100vw-3rem)] sm:w-96 max-h-[80vh] overflow-y-auto custom-scrollbar bg-white rounded-2xl shadow-2xl p-6 border-t-4 border-[#2c3820]"
          >
            {/* Header with Minimize Button */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Get In Touch
                </h3>
                <p className="text-gray-600 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Fill in your details and we'll get back to you
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                title="Minimize"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={3}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c3820] focus:border-transparent outline-none transition-all"
            placeholder="Enter your name"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Mobile Number *
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="10-digit mobile number"
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c3820] focus:border-transparent outline-none transition-all"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c3820] focus:border-transparent outline-none transition-all"
            placeholder="your@email.com"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Unit Type
          </label>
          <select
            name="unitType"
            value={formData.unitType}
            onChange={handleChange}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c3820] focus:border-transparent outline-none transition-all bg-white"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <option value="1BHK">1 BHK</option>
            <option value="2BHK">2 BHK</option>
            <option value="Any">Any</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Message (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={2}
            maxLength={500}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c3820] focus:border-transparent outline-none transition-all resize-none"
            placeholder="Any specific requirements?"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${loading ? 'bg-gray-400' : 'bg-[#2c3820] hover:bg-[#0F2340]'} text-white py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm flex items-center justify-center`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {loading ? 'Sending...' : 'Get Callback'}
        </button>

            <p className="text-[10px] text-gray-500 text-center mt-2 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              RERA No. uploaded on MahaRERA website
            </p>
          </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
