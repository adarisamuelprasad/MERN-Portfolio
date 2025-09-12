// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- THIS IS THE MODIFICATION FOR VERCEL ---
// This allows the server to accept requests from the URL you will set
// in your Vercel environment variables, while still working locally.
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));
// --- END OF MODIFICATION ---

app.use(express.json()); // Allows server to accept JSON data

const uri = process.env.MONGO_URI; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

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

// This is important for Vercel to correctly handle the serverless function
module.exports = app;

