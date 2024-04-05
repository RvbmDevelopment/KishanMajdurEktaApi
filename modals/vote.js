const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
  voteCount: {
    type: Number,
  },
});
const VoteCount = mongoose.model("VoteCount", formSchema);
module.exports = VoteCount;
