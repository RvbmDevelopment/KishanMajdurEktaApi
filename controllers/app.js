const FormModel = require("../modals/form");
const VoteCount = require("../modals/vote");
const { validationResult } = require("express-validator");

const FormSubmit = async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Destructure fields from req.body
  const { name, email, phone, address, topic, state, message } = req.body;
  console.log(req.body);
  try {
    // Create new form submission
    const formSubmission = new FormModel({
      name,
      email,
      phone,
      address,
      topic,
      state,
      message,
    });
    // Save form submission to database
    await formSubmission.save();
    res
      .status(201)
      .json({ success: true, message: "Form submitted successfully" });
  } catch (err) {
    console.error("Error submitting form:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
const CountIncreament = async (req, res) => {
  try {
    // Find all votes and get the count
    const totalVote = await VoteCount.find();
    const voteCount = totalVote.length;

    // Create new form submission with incremented vote count
    const latestVote = new VoteCount({
      voteCount: voteCount + 1,
    });

    // Save the new vote count
    await latestVote.save();

    // Send response
    res.status(200).json({ success: true, message: "Form submitted successfully" });
  } catch (err) {
    console.error("Error submitting form:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
const Count = async (req, res) => {
  // Validate request
  try {
    // Find all votes
    const totalVote = await VoteCount.find();
    res.status(200).send(totalVote.length.toString()); // Send total count as a string
  } catch (err) {
    console.error("Error fetching vote count:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
module.exports = { FormSubmit, CountIncreament, Count };
