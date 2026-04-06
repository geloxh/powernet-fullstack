const router = require('express').Router();
const Career = require('../models/Career');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.get('/', async (req, res) => {
    try {
        const careers = await Career.find();
        res.json(careers);
    } catch { res.status(500).json({ message: 'Failed to fetch careers' }); }
});

router.get('/:id', async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        if (!career) return res.status(404).json({ message: 'Career not found.' });
        res.json(career);
    } catch { res.status(500).json({ message: 'Failed to fetch career' }); }
});

router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const career = await new Career(req.body).save();
        res.status(201).json(career);
    } catch { res.status(500).json({ message: 'Failed to create career.' }); }
});

router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const career = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!career) return res.status(404).json({ message: 'Career not found.' });
        res.json(career);
    } catch { res.status(500).json({ message: 'Failed to update career.' }); }
});

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const career = await Career.findByIdAndDelete(req.params.id);
        if (!career) return res.status(404).json({ message: 'Career not found.' });
        res.json({ message: 'Career deleted successfully.' });
    } catch { res.status(500).json({ message: 'Failed to delete career.' }); }
});

module.exports = router;