const mongoose = require("mongoose");

async function connectToMongoDB() {
  try {
    // Connect to MongoDB
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("Connected"))
      .catch((err) => console.log("err", err));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

module.exports = connectToMongoDB;
