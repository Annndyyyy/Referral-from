const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const referralRoutes = require("./routes/referralRoutes");

const app = express();
const port = 5000;


app.use(bodyParser.json());


app.use("/api", authRoutes);
app.use("/api", referralRoutes);


mongoose.connect("mongodb://localhost:27017/referral_portal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err));


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
