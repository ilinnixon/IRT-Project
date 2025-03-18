const express = require('express');
const { getRecommendation } = require('../controllers/recommendController');

const router = express.Router();

router.post('/', getRecommendation);

module.exports = router;
