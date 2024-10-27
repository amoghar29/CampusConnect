const express = require('express');
const eventRouter = express.Router();

// GET /events - Get all events
eventRouter.get('/', /* getAllEventsController */);

// GET /events/:id - Get a specific event
eventRouter.get('/:id', /* getEventController */);

// POST /events - Create a new event (protected route for club heads)
eventRouter.post('/', /* authMiddleware, createEventController */);

// PUT /events/:id - Update an event (protected route for club heads)
eventRouter.put('/:id', /* authMiddleware, updateEventController */);

// DELETE /events/:id - Delete an event (protected route for club heads)
eventRouter.delete('/:id', /* authMiddleware, deleteEventController */);

module.exports = eventRouter;