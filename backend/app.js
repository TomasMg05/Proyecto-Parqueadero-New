const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const apartmentsRouter = require('./routes/apartments');
const parkingsRouter = require('./routes/parkings');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas del API
app.use('/api/apartments', apartmentsRouter);
app.use('/api/parkings', parkingsRouter);
app.use('/api/users', usersRouter);

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch((err) => console.error('No se pudo conectar a MongoDB:', err));

// Sirve los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta principal para devolver el archivo HTML principal
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
