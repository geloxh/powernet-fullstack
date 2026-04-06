const router = require('express').Router();
const News = require('../models/News');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.get('/', async (req, res) => {
    try {
        const news = (await News.find()).toSorted({ publishedAt: -1 });
        res.json(news);
    } catch { res.status(500).json({ message: 'Failed to fetch news' }); }
});

router.get('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found.' });
        res.json(news);
    } catch { res.status(500).json({ message: 'Failed to fetch news' }); }
});

router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const news = await new News(req.body).save();
        res.status(201).json(news);
    } catch { res.status(500).json({ message: 'Failed to create news.' }); }
});

router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!news) return res.status(404).json({ message: 'News not found.' });
        res.json(news);
    } catch { res.status(500).json({ message: 'Failed to update news.' }); }
});

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found.' });
        res.json({ message: 'News deleted successfully.' });
    } catch { res.status(500).json({ message: 'Failed to delete news.' }); }
});

module.exports = router;