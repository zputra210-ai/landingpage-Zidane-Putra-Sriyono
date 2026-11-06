const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Frontend
app.use(express.static(path.join(__dirname, 'front')));

// Import Routes
const profileRoutes = require('./routes/profilerouter');
const skillsRoutes = require('./routes/skillrouter');
const contactRoutes = require('./routes/contactrouter');

// API Routes
app.use('/api/profile', profileRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/contact', contactRoutes);

// Jalankan server hanya ketika dijalankan secara lokal
if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

// Export aplikasi untuk Vercel
module.exports = app;