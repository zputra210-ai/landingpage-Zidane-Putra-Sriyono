const express = require('express');
const router = express.Router();

const profileControl = require('../control/profilecontrol');

router.get('/', profileControl.getProfile);

module.exports = router;