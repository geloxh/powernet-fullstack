const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const News = require('./models/News');
const Partner = require('./models/Partner');
const Career = require('./models/Career');
const Solution = require('./models/Solution');
const { authMiddleware, adminMiddleware } = require('./middleware/auth');

require('dotenv').config();

const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/powernet')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

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
        res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role }});
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
        res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: 'Login failed:', error: error.message });
    }
});

// News Routes
app.get('/api/news', async (req, res) => {
    try {
        const news = await News.find().sort({ publishedAt: -1 });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch news', error: error.message });
    }
});

app.get('/api/news/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found' });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch news', error: error.message });
    }
});

// Admin Routes - News
app.post('/api/admin/news', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const news = new News(req.body);
        await news.save();
        res.status(201).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create news', error: error.message });
    }
});

app.put('/api/admin/news/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!news) return res.status(404).json({ message: 'News not found' });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update news', error: error.message });
    }
});

app.delete('/api/admin/news/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found' });
        res.json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete news', error: error.message });
    }
});

// Partners Routes
app.get('/api/partners', async (req, res) => {
    try {
        const partners = await Partner.find();
        res.json(partners);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch partners', error: error.message });
    }
});

app.post('/api/admin/partners', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const partner = new Partner(req.body);
        await partner.save();
        res.status(201).json(partner);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create partner', error: error.message });
    }
});

app.put('/api/admin/partners/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const partner = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!partner) return res.status(404).json({ message: 'Partner not found' });
        res.json(partner);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update partner', error: error.message });
    }
});

app.delete('/api/admin/partners/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const partner = await Partner.findByIdAndDelete(req.params.id);
        if (!partner) return res.status(404).json({ message: 'Partner not found' });
        res.json({ message: 'Partner deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete partner', error: error.message });
    }
});

// Careers Routes
app.get('/api/careers', async (req, res) => {
    try {
        const careers = await Career.find({ isActive: true });
        res.json(careers);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch careers', error: error.message });
    }
});

app.post('/api/admin/careers', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const career = new Career(req.body);
        await career.save();
        res.status(201).json(career);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create career', error: error.message });
    }
});

app.put('/api/admin/careers/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const career = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!career) return res.status(404).json({ message: 'Career not found' });
        res.json(career);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update career', error: error.message });
    }
});

app.delete('/api/admin/careers/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const career = await Career.findByIdAndDelete(req.params.id);
        if (!career) return res.status(404).json({ message: 'Career not found' });
        res.json({ message: 'Career deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete career', error: error.message });
    }
});

// Solutions Routes
app.get('/api/solutions', async (req, res) => {
    try {
        const solutions = await Solution.find();
        res.json(solutions);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch solutions', error: error.message });
    }
});

app.post('/api/admin/solutions', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const solution = new Solution(req.body);
        await solution.save();
        res.status(201).json(solution);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create solution', error: error.message });
    }
});

app.put('/api/admin/solutions/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const solution = await Solution.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!solution) return res.status(404).json({ message: 'Solution not found' });
        res.json(solution);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update solution', error: error.message });
    }
});

app.delete('/api/admin/solutions/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const solution = await Solution.findByIdAndDelete(req.params.id);
        if (!solution) return res.status(404).json({ message: 'Solution not found' });
        res.json({ message: 'Solution deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete solution', error: error.message });
    }
});

// Admin - Get all users
app.get('/api/admin/users', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const users = await User.find().select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
});

app.get('/api/test', (req, res) => {
    res.json({ message: "PowerNet Backend is running!" });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    res.json({ success: true, message: "Message received" });
});

app.use((req, res) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    }
});

app.listen(PORT, () => {
    console.log(`PowerNet server running on port ${PORT}`);
});

module.exports = app;