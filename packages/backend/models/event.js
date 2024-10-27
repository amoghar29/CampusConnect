const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String, required: true },
  club: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  startTime: { type: String, required: true }, // Store as "HH:MM" format
  endTime: { type: String, required: true }, // Store as "HH:MM" format
  location: { type: String, required: true },
  description: { type: String },
  eligibility: { type: String },
  registrationFee: { type: Number },
  teamSize: { type: Number },
  maxParticipants: { type: Number },
  currentParticipants: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', EventSchema);
