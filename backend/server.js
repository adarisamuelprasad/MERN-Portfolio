const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Mongoose configuration
mongoose.set('strictQuery', true); // Fix deprecation warning

const uri = process.env.MONGO_URI; // Use URI from .env
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("✅ MongoDB database connection established successfully");
});
connection.on('error', (err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Mongoose Schema & Model
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

// API route for contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ status: 'Success', message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(400).json({ status: 'Error', message: 'Failed to send message.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port: ${PORT}`);
});
