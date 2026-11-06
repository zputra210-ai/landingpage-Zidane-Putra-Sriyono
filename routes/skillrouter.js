const express = require('express');
const router = express.Router();

const skillsControl = require('../control/skillcontrol');

router.get('/', skillsControl.getSkills);

module.exports = router;