const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    emergencyContact: { type: String }, // Phone or Email of helper
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);