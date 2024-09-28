const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Ruta para login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send({ success: false, message: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send({ success: false, message: 'Contraseña incorrecta' });

    const token = jwt.sign({ _id: user._id, role: user.role }, 'secretKey');
    res.send({ success: true, token });
});

module.exports = router;
