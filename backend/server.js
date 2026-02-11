const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 4000;

// MongoDb Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/powernet')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? 'https://powernetglobal.net' 
        : ['http://localhost:3000', 'http://localhost:5173']
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Auth Routes
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const user = new User({ name, email, password });
        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email }});
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d'});
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Login failed:', error: error.message });
    }
});

// API Routes
app.get('/api/test', (req, res) => {
    res.json({ message: "PowerNet Backend is running!" });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Add your contact form logic here
    res.json({ success: true, message: "Message received" });
});

// Serve React app
app.use((req, res) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    }
});

app.listen(PORT, () => {
    console.log(`PowerNet server running on port ${PORT}`);
});

// Export the app for Vercel
module.exports = app;
