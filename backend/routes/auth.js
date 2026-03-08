const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
    console.log("--- START REGISTER ---");
    const { name, email, password } = req.body;
    
    try {
        console.log("1. Checking if user exists:", email);
        let user = await User.findOne({ email });
        if (user) {
            console.log("FAILED: User already exists");
            return res.status(400).json({ msg: 'User already exists' });
        }

        console.log("2. Creating User instance");
        user = new User({ name, email, password });

        console.log("3. Hashing password");
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        console.log("4. Attempting to save to MongoDB...");
        await user.save();
        console.log("SUCCESS: User saved to database!");

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '7d' }, (err, token) => {
            if (err) throw err;
            console.log("5. JWT Generated, sending response");
            res.json({ token, user: { name, email } });
        });
    } catch (err) {
        console.error("CRITICAL ERROR DURING REGISTER:", err.message);
        res.status(500).send('Server Error: ' + err.message);
    }
});

router.post('/login', async (req, res) => {
    console.log("--- START LOGIN ---");
    const { email, password } = req.body;
    try {
        console.log("1. Looking for user:", email);
        let user = await User.findOne({ email });
        if (!user) {
            console.log("FAILED: User not found in database");
            return res.status(400).json({ msg: 'User not found' });
        }

        console.log("2. Comparing password");
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("FAILED: Password mismatch");
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '7d' }, (err, token) => {
            if (err) throw err;
            console.log("SUCCESS: Login successful, token sent");
            res.json({ token, user: { name: user.name, email: user.email } });
        });
    } catch (err) {
        console.error("CRITICAL ERROR DURING LOGIN:", err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;