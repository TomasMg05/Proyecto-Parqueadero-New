const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// Rutas
const apartmentRoutes = require('./routes/apartments');
const userRoutes = require('./routes/users');

app.use('/api/apartments', apartmentRoutes);
app.use('/api/users', userRoutes);

mongoose.connect('mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/parking_admin', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('No se pudo conectar a MongoDB:', err));

app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});
