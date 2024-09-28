const express = require('express');
const router = express.Router();
const Apartment = require('../models/apartment');

// Obtener todos los apartamentos
router.get('/', async (req, res) => {
    try {
        const apartments = await Apartment.find();
        res.json(apartments);
    } catch (err) {
        res.status(500).send('Error en la obtención de apartamentos');
    }
});

// Registrar un nuevo apartamento
router.post('/', async (req, res) => {
    const { apartmentNumber, residentName } = req.body;

    const apartment = new Apartment({
        apartmentNumber,
        residentName,
        paymentStatus: 'al día',
        daysDue: 0
    });

    try {
        const savedApartment = await apartment.save();
        res.status(201).json({ success: true, data: savedApartment });
    } catch (err) {
        res.status(500).send('Error al registrar el apartamento');
    }
});

// Actualizar el estado de pago de un apartamento
router.put('/:id', async (req, res) => {
    try {
        const apartment = await Apartment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!apartment) return res.status(404).send('Apartamento no encontrado');
        res.json(apartment);
    } catch (err) {
        res.status(500).send('Error al actualizar el apartamento');
    }
});

module.exports = router;
