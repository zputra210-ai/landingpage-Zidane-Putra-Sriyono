const skillsModel = require('../back/skillmodel');

function getSkills(req, res) {
    const skills = skillsModel.getSkills();
    res.json(skills);
}

module.exports = {getSkills};