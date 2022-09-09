const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        miPrimerAPI: 'works'
    });
});

module.exports = router;