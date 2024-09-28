const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
    apartmentNumber: String,
    residentName: String,
    paymentStatus: { type: String, enum: ['al día', 'mora', 'restricción'], default: 'al día' },
    daysDue: { type: Number, default: 0 }
});

module.exports = mongoose.model('Apartment', apartmentSchema);
