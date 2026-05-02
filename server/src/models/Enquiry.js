import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    unitType: {
        type: String,
        required: true,
        default: '1BHK'
    },
    message: {
        type: String,
    },
    status: {
        type: String,
        enum: ['New', 'Contacted'],
        default: 'New'
    }
}, { timestamps: true });

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;
