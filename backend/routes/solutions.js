const router = require('express').Router();
const Solution = require('../models/Solutions');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.get('/', async (req, res) => {
    try {
        const solutions = await Solution.find();
        res.json(solutions);
    } catch {
        res.status(500).json({ message: 'Failed to fetch solution.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const solution = await Solution.findById(req.params.id);
        if (!solution) return res.status(404).json({ message: 'Solution not found.' });
        res.json(solution);
    } catch { 
        res.status(500).json({ message: 'Failed to fetch solution.' });
    }
});

router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const solution = await new Solution(req.body).save();
        res.status(201).json(solution);
    } catch {
        res.status(500).json({ message: 'Failed to create solution.' });
    }
});

router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const solution = await Solution.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!solution) return res.status(404).json({ message: 'Solution not found.' });
        res.json(solution);
    } catch {
        res.status(500).json({ message: 'Failed to update solution.' });
    }
});

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const solution = await Solution.findByIdAndDelete(req.params.id);
        if (!solution) return res.status(404).json({ message: 'Solution not found.' });
        res.json({ message: 'Solution deleted successfully.' });
    } catch {
        res.status(500).json({ message: 'Failed to delete solution.' });
    }
});

module.exports = router;