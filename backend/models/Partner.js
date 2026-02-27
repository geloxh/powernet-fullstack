const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    category: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    specialties: [{ type: String }],
    url: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Partner', partnerSchema);