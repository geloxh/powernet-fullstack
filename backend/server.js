const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? 'https://powernetglobal.net' 
        : 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API Routes
app.get('/api/test', (req, res) => {
    res.json({message: "PowerNet Backend is running!"});
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Add your contact form logic here
    res.json({success: true, message: "Message received"});
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
