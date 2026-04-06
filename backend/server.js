require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/powernet')
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(helmet());
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? 'https://powernetglobal.net'
        : ['http://localhost:3000', 'http://localhost:5173']
}));
app.use(express.json());

app.use('/api', require('./routes/auth'));
app.use('/api/news', require('./routes/news'));
app.use('/api/partners', require('./routes/partners'));
app.use('/api/careers', require('./routes/careers'));
app.use('/api/solutions', require('./routes/solutions'));
app.use('/api/admin', require('./routes/admin'));

app.post('/api/contact', (req, res) => {
    // TODO: integrate Nodemailer or SendGrid
    res.json({ success: true, message: 'Message received.' });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/dist/index.html' )));
}

app.listen(PORT, () => console.log('PowerNet server running on port ${PORT} '));
module.exports = app;