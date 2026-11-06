const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(express.static(path.join(__dirname, 'front')));


const profileRoutes = require('./routes/profilerouter');
const skillsRoutes = require('./routes/skillrouter');
const contactRoutes = require('./routes/contactrouter');


// API Routes
app.use('/api/profile', profileRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/contact', contactRoutes);



// Start Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
