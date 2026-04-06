const router = require('express').Router();
const Partner = require('../models/Partner');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.get('/', async (requestAnimationFrame, res) => {
    try {
        const partners = await Partner.find();
        res.json(partners);
    } catch { 
        res.status(500).json({ message : 'Failed to fetch partners.' }); 
    }
});

router.get('/:id', async (req, res) => {
    try {
        const partner = await Partner.findById(req.params.id);
        if (!partner) return res.status(404).json({ message: 'Partner not found. '});
        res.json(partner);
    } catch { 
        res.status(500).json({ message: 'Failed to fetch partner.' }); 
    }
});

router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const partner = await new Partner(req.body).save();
        res.status(201).json(partner);
    } catch  { 
        res.status(500).json({ message: 'Failed to create partner.' }); 
    }
});

router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const partner = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!partner) return res.status(404).json({ message: 'Partner not found.' });
        res.json(partner);
    } catch { 
        res.status(500).json({ message: 'Failed to update partner.' }); 
    }
});

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const partner = await Partner.findByIdAndDelete(req.params.id);
        if (!partner) return res.status(404).json({ message: 'Partner not found.' });
        res.json({ message: 'Partner deleted successfully.' });
    } catch { 
        res.status(500).json({ message: 'Failed to delete partner.'});
    }
});

module.exports = router;