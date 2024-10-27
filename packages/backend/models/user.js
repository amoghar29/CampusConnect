const mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  clubName: { type: String, required: true },
  // logo: {
  //   type: String, // This will store the URL or path to the logo image
  //   default: '' // You can set a default logo if needed
  // },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
