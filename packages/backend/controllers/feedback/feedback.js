const Feedback = require("../../models/feedback");
async function submitUserFeedback(req, res) {
  try {
    const { userExperience, userIssue, issueDescription } = req.body;
    const feedbackDetails = await Feedback.create({
      userExperience,
      userIssue,
      issueDescription,
    });
    return res.status(201).json(feedbackDetails);
  } catch (error) {
    return res.status(400).json({ error: "Submission failed" });
  }
}

module.exports = { submitUserFeedback };
