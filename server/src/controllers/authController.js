import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
        expiresIn: '30d',
    });
};

// @desc    Auth admin & get token
// @route   POST /api/auth/login
export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });

        if (admin && (await admin.matchPassword(password))) {
            res.json({
                _id: admin._id,
                email: admin.email,
                token: generateToken(admin._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Seed default admin if none exists
// @route   POST /api/auth/seed
export const seedAdmin = async (req, res) => {
    try {
        const adminExists = await Admin.findOne({ email: 'admin@ahana.com' });

        if (adminExists) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        const admin = await Admin.create({
            email: 'admin@ahana.com',
            password: 'admin123'
        });

        res.status(201).json({
            message: 'Default admin seeded successfully',
            email: admin.email,
            password: 'admin123'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
