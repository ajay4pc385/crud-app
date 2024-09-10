const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');


// Initialize dotenv
dotenv.config();

// Initialize express app
const app = express();
app.use(cors());
// Load environment variables
require('dotenv').config();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Use routes
app.use('/api/users', userRoutes);
// app.post('/create', (req, res) => {
//   const { name, email, age, description, mobileNumber } = req.body;

//   // You can add validation or processing logic here
//   if (!name || !email || !age || !description || !mobileNumber) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   // For demonstration, just return the received data
//   res.status(201).json({
//     message: 'Data received successfully',
//     data: { name, email, age, description, mobileNumber }
//   });
// });
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
