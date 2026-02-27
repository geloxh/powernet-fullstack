const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema ({
    title: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    requirements: [{type: String }],
    isActive: { type: Boolean, default: true }
}, { timeStamps: true });

module.exports = mongoose.model('Career', careerSchema);