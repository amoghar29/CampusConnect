const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const feedbackSchema = new Schema({
  userRating: { type: String, required: true },
  userIssue: { type: String, required: true },
  issueDescription: { type: String, required: true },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
