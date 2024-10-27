const express = require('express');
const router = express.Router();

// GET /polls - Get all polls
router.get('/', /* getAllPollsController */);

// GET /polls/:id - Get a specific poll
router.get('/:id', /* getPollController */);

// POST /polls - Create a new poll (protected route for club heads)
router.post('/', /* authMiddleware, createPollController */);

// PUT /polls/:id - Update a poll (protected route for club heads)
router.put('/:id', /* authMiddleware, updatePollController */);

// DELETE /polls/:id - Delete a poll (protected route for club heads)
router.delete('/:id', /* authMiddleware, deletePollController */);

// POST /polls/:id/vote - Submit a vote for a poll
router.post('/:id/vote', /* submitVoteController */);

module.exports = router;