const express = require('express');
const router = express.Router();

const contactControl = require('../control/contactcontrol');

router.post('/', contactControl.submitContact);

module.exports = router;