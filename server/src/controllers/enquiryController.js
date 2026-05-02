import Enquiry from '../models/Enquiry.js';

// @desc    Create a new enquiry
// @route   POST /api/enquiries
export const createEnquiry = async (req, res) => {
    try {
        const { name, mobile, email, unitType, message } = req.body;
        
        const enquiry = await Enquiry.create({
            name,
            mobile,
            email,
            unitType,
            message
        });

        res.status(201).json({ success: true, data: enquiry });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Get all enquiries
// @route   GET /api/enquiries
export const getEnquiries = async (req, res) => {
    try {
        const keyword = req.query.search ? {
            $or: [
                { name: { $regex: req.query.search, $options: 'i' } },
                { email: { $regex: req.query.search, $options: 'i' } },
                { mobile: { $regex: req.query.search, $options: 'i' } },
            ]
        } : {};

        const enquiries = await Enquiry.find({ ...keyword }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: enquiries });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Update enquiry status
// @route   PUT /api/enquiries/:id
export const updateEnquiryStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const enquiry = await Enquiry.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!enquiry) {
            return res.status(404).json({ success: false, error: 'Enquiry not found' });
        }

        res.status(200).json({ success: true, data: enquiry });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Delete an enquiry
// @route   DELETE /api/enquiries/:id
export const deleteEnquiry = async (req, res) => {
    try {
        const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

        if (!enquiry) {
            return res.status(404).json({ success: false, error: 'Enquiry not found' });
        }

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
