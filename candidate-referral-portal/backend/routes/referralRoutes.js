const express = require("express");
const Referral = require("../models/Referral");

const router = express.Router();


router.post("/referrals", async (req, res) => {
  const { name, email, experience, status } = req.body;
  const referral = new Referral({ name, email, experience, status });
  await referral.save();
  res.status(201).json(referral);
});


router.put("/referrals/:id/status", async (req, res) => {
  const { status } = req.body;
  const referral = await Referral.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );
  if (!referral) {
    return res.status(404).json({ message: "Referral not found" });
  }
  res.json(referral);
});


router.get("/referrals", async (req, res) => {
  const referrals = await Referral.find();
  res.json(referrals);
});

module.exports = router;
