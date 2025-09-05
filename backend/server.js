// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows requests from your React app
app.use(express.json()); // Allows server to accept JSON data

// --- MongoDB Connection ---
const uri = process.env.MONGO_URI; // Store your connection string in a .env file
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// --- Mongoose Schema and Model ---
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

// --- API Route ---
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ status: 'Success', message: 'Message sent successfully!' });
  } catch (error) {
    res.status(400).json({ status: 'Error', message: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});