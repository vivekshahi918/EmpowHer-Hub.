const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Define Routes
app.use('/api/auth', require('../routes/auth'));
app.use('/api/ai', require('../routes/ai'));   // ✅ ADD THIS LINE

// Test Route
app.get('/', (req, res) => res.send('EmpowHer API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;