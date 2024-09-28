const express = require('express');
const router = express.Router();
const Parking = require('../models/parking');

// Obtener todos los parqueaderos
router.get('/', async (req, res) => {
    try {
        const parkings = await Parking.find();
        res.json(parkings);
    } catch (err) {
        res.status(500).send('Error en la obtención de parqueaderos');
    }
});

// Asignar o liberar un parqueadero
router.put('/:id', async (req, res) => {
    try {
        const parking = await Parking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!parking) return res.status(404).send('Parqueadero no encontrado');
        res.json(parking);
    } catch (err) {
        res.status(500).send('Error al actualizar el parqueadero');
    }
});

module.exports = router;
