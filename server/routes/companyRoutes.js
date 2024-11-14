const express = require('express');
const {companies} = require('../controllers/companyController')
const router = express.Router();

router.get('/', companies);

module.exports = router;