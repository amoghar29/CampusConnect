const express = require('express');

const { connectToDb } = require('./connection');
const cors = require('cors');
const { User } = require('./models/user');
const bcrypt = require('bcrypt');

const { setId, getId } = require('./utils/auth');
const { JsonWebTokenError } = require('jsonwebtoken');

const app = express();

// for password encryption
const salt = bcrypt.genSaltSync(10);

// middlewares
app.use(
  cors({
    origin: 'http://localhost:3000', // Adjust this to match your frontend's URL
    credentials: true,
  })
);
app.use(express.json());
// app.use(JsonWebTokenError()); // Removed as it is incorrect
// If you need JWT verification, create a middleware function instead
// const jwtMiddleware = (req, res, next) => {
//     // Your JWT verification logic here
//     next();
// };
// app.use(jwtMiddleware); // Uncomment this line if you create the middleware

connectToDb(
  'mongodb+srv://amogharlearns:qc1VkNPDcOGJuQwo@club-user-data.w643p.mongodb.net/'
).then(() => console.log('Connected to DB'));


// routes
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, salt); // Hash the password
    const details = await User.create({
      username,
      password: hashedPassword,
    });
    return res.status(201).json(details); // Send the created user as a response
  } catch (error) {
    if (error.code === 11000) {
      // MongoDB duplicate key error code
      return res.status(400).json({ error: 'Username already exists' }); // User-friendly error message
    } else {
      return res.status(500).json({ error: 'User registration failed' }); // Handle other errors
    }
  }
});
app.get('/home', async (req, res) => {
  // You can add authentication checks here if needed
  res.status(200).json({ message: 'Welcome to the home page!' });
});
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userInfo = await User.findOne({ username });
  if (!userInfo) {
    // User not found
    console.log('User not found');
    return res.status(400).json({ error: 'User not found' });
  }
  const passwordCorrect = bcrypt.compareSync(password, userInfo.password);

  if (passwordCorrect) {
    // user authenticated
    console.log(userInfo);

    const token = setId(userInfo); // remove line
    const vals = getId(token); // remove line
    console.log(vals); // remove line

    res.cookie('uid', token);
    // {{ edit_3 }} Consider sending a JSON response instead of redirecting
    return res.status(200).json({
      success: true,
      user: {
        username: userInfo.username,
        // Add any other user details you want to send back
      },
    });
  } else {
    // Password incorrect
    return res.status(400).json({ error: 'Invalid password' });
  }
});

app.listen(4000);
