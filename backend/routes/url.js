const express = require('express');
const router = express.Router();
const {handleGenerateNewShortUrl,handleGetRedirectedUrl} = require('../controllers/url')

router.post('/',handleGenerateNewShortUrl);

module.exports = router;