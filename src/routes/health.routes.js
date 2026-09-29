const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
    });
});

module.exports = router;