// routes.js
const express = require('express');
const router = express.Router();
const { scanear, leerDia, leerDia_v2 } = require('../services/flutter');
require('dotenv').config();

const { subirImagen } = require('../services/firebase')

const spreadsheetId_grupo7 = "1iFs2abOkFU8lFrRzokhb0hrIzSHjeMhi6EMsGU-Fem8";

router.post("/scan_7", async (req, res) => {
    try {
        console.log('peticion de scaneo')
        const respuesta = await scanear(spreadsheetId, req);
        console.log('---------RESP:', respuesta)
        res.send(respuesta)
    } catch (error) {
        console.error('Error /borrar:', error);
        res.status(500).send('Error al procesar la solicitud');
    }
});


router.get("/day_7", async (req, res) => {
    try {
        console.log('peticion del dia')
        const respuesta = await leerDia(spreadsheetId);
        console.log('---------RESP:', respuesta)
        res.send(respuesta)
    } catch (error) {
        console.error('Error /day:', error);
        res.status(500).send('Error al procesar la solicitud');
    }
});


router.get("/dayV2_7", async (req, res) => {
    try {
        console.log('peticion del dia')
        const respuesta = await leerDia_v2(spreadsheetId);
        console.log('---------RESP:', respuesta)
        res.send(respuesta)
    } catch (error) {
        console.error('Error /day:', error);
        res.status(500).send('Error al procesar la solicitud');
    }
});