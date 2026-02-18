const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    image: { type: String },
    category: { type: String, default: 'General' },
    author: { type: String, default: 'PowerNet Team'},
    publishedAt: { type: Date, default: Date.now },
    featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);