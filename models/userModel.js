const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  description: { type: String },
  mobileNumber: { type: String, required: true },
});

// Export the model
const User = mongoose.model('User', userSchema);
module.exports = User;
