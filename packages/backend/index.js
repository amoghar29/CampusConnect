const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const { connectToDb } = require('./connection');
const cors = require('cors');
const { User } = require('./models/user');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const app = express();
const dbUrl = process.env.MONGODB_URL;
const salt = bcrypt.genSaltSync(5);
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 4000;
// const FRONTEND_URL = process.env.FRONTEND_LOCAL_URL;
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());

connectToDb(dbUrl).then(() => console.log('Connected to DB'));

app.post('/register', async (req, res) => {
  const { email, password, clubName } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, salt);
    const details = await User.create({
      email,
      password: hashedPassword,
      clubName,
    });
    return res.status(201).json(details);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    } else {
      return res.status(500).json({ error: 'User registration failed' });
    }
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const userInfo = await User.findOne({ email });

    if (!userInfo) {
      return res.status(400).json({ error: 'User not found' });
    }

    const passwordCorrect = bcrypt.compareSync(password, userInfo.password);

    if (passwordCorrect) {
      const token = jwt.sign({ email: email }, JWT_SECRET);
      res.header('jwt', token);
      return res.status(200).json({
        success: true,
        user: {
          email: userInfo.email,
        },
      });
    } else {
      return res.status(400).json({ error: 'Invalid password' });
    }
  } catch (error) {
    console.error('Login error:', error);

    console.error(error.stack);
    return res
      .status(500)
      .json({ error: 'Internal server error', details: error.message });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
