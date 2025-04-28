const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes/index');
const routes_7 = require('./routes/grupo 7');


// Middleware para manejar JSON
app.use(express.json());

// Usar las rutas

app.use('/api', routes);

app.use('/api', routes_7);

// Ruta para servir la página principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Asegúrate de que el archivo index.html esté en la carpeta 'public'
});



// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
