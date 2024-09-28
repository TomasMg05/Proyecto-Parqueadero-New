const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
    parkingSlotNumber: String,
    apartmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Apartment', default: null },
    status: { type: String, enum: ['asignado', 'libre'], default: 'libre' }
});

module.exports = mongoose.model('Parking', parkingSchema);
