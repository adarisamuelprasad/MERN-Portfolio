const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());

// --- FIX FOR MONGOOSE DEPRECATION WARNING ---
// This suppresses the warning you saw in your logs.
mongoose.set('strictQuery', true);
// --- END OF FIX ---

// WARNING: Hardcoding your database connection string is a security risk.
// It's better to use environment variables (like process.env.MONGO_URI)
// and set them in your hosting provider's dashboard (e.g., Render).
const uri = "mongodb+srv://adarisamuelprasad:Samuel28042005@adari-samuel-prasad-por.sm0my3g.mongodb.net/?retryWrites=true&w=majority&appName=adari-samuel-prasad-portfolio";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required:true },
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

// --- THIS IS THE CRITICAL CHANGE FOR RENDER ---
// This starts the server and makes it listen on the port provided by Render.
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
// --- END OF CHANGE ---

// The line below is for Vercel ONLY and must be removed for Render.
// module.exports = app;

