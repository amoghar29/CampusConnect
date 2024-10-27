const express = require('express');
const router = express.Router();

// POST /suggestions - Submit a suggestion
router.post('/', /* submitSuggestionController */);

// GET /suggestions - Get all suggestions (admin only)
router.get('/', /* adminMiddleware, getAllSuggestionsController */);

module.exports = router;