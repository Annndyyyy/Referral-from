const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  experience: { type: String },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Referral", referralSchema);
