const express = require('express');
const router = express.Router();

// POST /auth/register - Register a new club head
router.post('/register', /* registerController */);

// POST /auth/login - Login for club heads
router.post('/login', /* loginController */);

// POST /auth/logout - Logout
router.post('/logout', /* logoutController */);

module.exports = router;