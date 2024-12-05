const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);
const suggestionSchema = new mongoose.Schema({
  userFullname: String,
  userEmail: String,
  userPhoneNumber: Number,
  collegeClub: String,
  suggestedEventTitle: String,
  suggestedEventDescription: String,
  expectedHeadCount: Number,
  eventDuration: Number,
  additionalNotes: String,
});

const clubSchema = new mongoose.Schema({
  clubName: String,
  createdBy: mongoose.Schema.Types.ObjectId,
  aboutUs: String,
  logo: String,
  foundedYear: Number,
  president: String,
  vicePresident: String,
  email: String,
  phoneNumber: String,
  socialMedia: Object,
  membershipFee: Number,
  totalMembers: Number,
  achievements: [String],
});

const eventSchema = new mongoose.Schema({
  name: String,
  club: mongoose.Schema.Types.ObjectId,
  createdBy: mongoose.Schema.Types.ObjectId,
  startDate: Date,
  startTime: String,
  endTime: String,
  location: String,
  description: String,
  eligibility: String,
  registrationFee: Number,
  teamSize: String,
  firstPlace: String,
  secondPlace: String,
});

const feedbackSchema = new mongoose.Schema({
  userRating: String,
  userIssue: String,
  issueDescription: String,
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);
const Club = mongoose.model('Club', clubSchema);
const Event = mongoose.model('Event', eventSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

async function insertData() {
  await Suggestion.insertMany([
    // Add your sample data here
    { userFullname: "John Doe", userEmail: "john@example.com", userPhoneNumber: 1234567890, collegeClub: "Tech Club", suggestedEventTitle: "Tech Talk", suggestedEventDescription: "A talk on the latest in tech", expectedHeadCount: 50, eventDuration: 2, additionalNotes: "Invite guest speakers." }
  ]);

  await Club.insertMany([
    // Add sample data for Club
    { clubName: "Tech Club", createdBy: new mongoose.Types.ObjectId(), aboutUs: "A club for tech enthusiasts", logo: "logo.png", foundedYear: 2020, president: "Alice Smith", vicePresident: "Bob Johnson", email: "techclub@example.com", phoneNumber: "123-456-7890", socialMedia: {}, membershipFee: 10, totalMembers: 100, achievements: ["Best Club 2021"] }
  ]);

  await Event.insertMany([
    // Add sample data for Event
    { name: "Tech Talk", club: new mongoose.Types.ObjectId(), createdBy: new mongoose.Types.ObjectId(), startDate: new Date(), startTime: "10:00 AM", endTime: "12:00 PM", location: "Auditorium", description: "A talk on the latest in tech", eligibility: "Open to all", registrationFee: 5, teamSize: "Individual", firstPlace: "Gift Card", secondPlace: "Certificate" }
  ]);

  await Feedback.insertMany([
    // Add sample data for Feedback
    { userRating: "5", userIssue: "None", issueDescription: "Great event!" }
  ]);

  console.log('Data inserted successfully!');
  mongoose.connection.close();
}

insertData().catch((err) => console.error(err));
