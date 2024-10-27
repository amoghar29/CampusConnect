const express = require('express');
const router = express.Router();

// POST /feedback - Submit feedback
router.post('/', /* submitFeedbackController */);

// GET /feedback - Get all feedback (admin only)
router.get('/', /* adminMiddleware, getAllFeedbackController */);

module.exports = router;