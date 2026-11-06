function submitContact(req, res) {

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    console.log('New Contact Message:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    res.status(200).send('Your message has been received!');

}

module.exports = {submitContact};