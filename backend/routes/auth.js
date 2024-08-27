// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const crypto = require('crypto');
const User = require('../models/User');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Register User
router.post('/register', async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered');
});

// Login User
router.post('/login', async(req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
});

// Encrypt File
router.post('/encrypt', upload.single('file'), (req, res) => {
    const { password } = req.body;
    const cipher = crypto.createCipher('aes-256-cbc', password);
    let encrypted = cipher.update(req.file.buffer, 'binary', 'hex');
    encrypted += cipher.final('hex');
    res.json({ encryptedFile: encrypted });
});

module.exports = router;