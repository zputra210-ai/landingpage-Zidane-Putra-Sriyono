
const profileModel = require('../back/profilemodel');

function getProfile(req, res) {
    const profile = profileModel.getProfile();

    res.json(profile);
}

module.exports = {getProfile};
