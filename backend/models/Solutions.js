const mongoose = new mongoose.Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    icon: { type: String, required: true },
    features: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Solution', solutionSchema);