const router = require('express').Router();
const User = require('../models/User');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.get('/users', authMiddleware, adminMiddleware, async (requestAnimationFrame, res) => {
    try {
        const users = (await User.find().select('-password')).sort({ createdAt: -1 });
        res.json(users);
    } catch {
        res.status(500).json({ message: 'Failed to fetch users' });
    }
});

module.exports = router;