const express = require('express');
const clubRouter = express.Router();

// GET /clubs - Get all clubs
clubRouter.get('/', /* getAllClubsController */);

// GET /clubs/:id - Get a specific club
clubRouter.get('/:id', /* getClubController */);

// POST /clubs - Create a new club (admin only)


module.exports = clubRouter;