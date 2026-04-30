import { appendToSheet } from '../config/googleSheets.js';

// @desc    Create new enquiry
// @route   POST /api/enquiries
// @access  Public
export const createEnquiry = async (req, res) => {
  try {
    const { name, mobile, email, unitType, message } = req.body;

    // Validate fields
    if (!name || !mobile || !email) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields (name, mobile, email)',
      });
    }

    // Append to Google Sheets
    await appendToSheet({ name, mobile, email, unitType, message });

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
    });
  } catch (error) {
    console.error('Enquiry Error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to process enquiry',
    });
  }
};

// @desc    Get all enquiries
// @route   GET /api/enquiries
// @access  Private (Currently disabled as no DB)
export const getEnquiries = async (req, res) => {
  res.status(501).json({
    success: false,
    message: 'GET enquiries is not implemented without database storage',
  });
};
