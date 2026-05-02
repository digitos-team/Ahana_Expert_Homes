import express from 'express';
import {
    createEnquiry,
    getEnquiries,
    updateEnquiryStatus,
    deleteEnquiry
} from '../controllers/enquiryController.js';

const router = express.Router();

router.route('/')
    .post(createEnquiry)
    .get(getEnquiries);

router.route('/:id')
    .put(updateEnquiryStatus)
    .delete(deleteEnquiry);

export default router;
