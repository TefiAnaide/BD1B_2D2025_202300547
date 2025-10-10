const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

//------------------------------------- CRUD Centros -----------------------------------//
//crear
app.post('/centros', async (req, res) => {
    try {
        const { Id_Centro, Nombre } = req.query;
        const sql = 'INSERT INTO Centro (Id_Centro, Nombre) VALUES (:1, :2)';
        await db.open(sql, [Id_Centro, Nombre], true);
        res.send('Centro creado');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear el centro');
    }
});

//leer
app.get('/centros', async (req, res) => {
    try {    
        const sql = 'SELECT * FROM Centro';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los centros');
    }
});

//actualizar
app.put('/centros/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre } = req.query;
        const sql = 'UPDATE Centro SET Nombre = :1 WHERE Id_Centro = :2';
        await db.open(sql, [Nombre, id], true);
        res.send('Centro actualizado');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar el centro');
    }
});

//eliminar
app.delete('/centros/:id', async (req, res) => {
    try {    
        const { id } = req.params;
        const sql = 'DELETE FROM Centro WHERE Id_Centro = :1';
        await db.open(sql, [id], true);
        res.send('Centro eliminado');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al eliminar el centro');
    }
});

//------------------------------------- CRUD Pregunta_Teorico -----------------------------------//
// crear
app.post('/Pregunta_Teorico', async (req, res) => {
    try {
        const { id_pregunta, pregunta_texto, Respuesta, Res1, Res2, Res3, Res4 } = req.query;
        const sql = `
            INSERT INTO Pregunta_Teorico 
            (id_pregunta, pregunta_texto, Respuesta, Res1, Res2, Res3, Res4)
            VALUES (:1, :2, :3, :4, :5, :6, :7)
        `;
        await db.open(sql, [id_pregunta, pregunta_texto, Respuesta, Res1, Res2, Res3, Res4], true);
        res.send('Pregunta creada correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear la pregunta');
    }
});

// leer
app.get('/Pregunta_Teorico', async (req, res) => {
    try {    
        const sql = 'SELECT * FROM Pregunta_Teorico';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las preguntas');
    }
});

// actualizar
app.put('/Pregunta_Teorico/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { pregunta_texto, Respuesta, Res1, Res2, Res3, Res4 } = req.query;

        const sql = `
            UPDATE Pregunta_Teorico 
            SET pregunta_texto = :1,
                Respuesta = :2,
                Res1 = :3,
                Res2 = :4,
                Res3 = :5,
                Res4 = :6
            WHERE id_pregunta = :7
        `;

        await db.open(sql, [pregunta_texto, Respuesta, Res1, Res2, Res3, Res4, id], true);
        res.send('Pregunta actualizada correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar la pregunta');
    }
});

// eliminar
app.delete('/Pregunta_Teorico/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Pregunta_Teorico WHERE id_pregunta = :1';
        await db.open(sql, [id], true);
        res.send('Pregunta eliminada correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send(' Error al eliminar la pregunta');
    }
});

// -------------------------------------- CRUD Pregunta_Practico -----------------------------------//
// Crear
app.post('/Pregunta_Practico', async (req, res) => {
    try {
        const { Id_pregunta_practico, Pregunta_texto, Punteo } = req.query;
        const sql = 'INSERT INTO Pregunta_Practico (Id_pregunta_practico, Pregunta_texto, Punteo) VALUES (:1, :2, :3)';
        await db.open(sql, [Id_pregunta_practico, Pregunta_texto, Punteo], true);
        res.send('Pregunta práctica creada correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear la pregunta práctica');
    }
});

// Leer
app.get('/Pregunta_Practico', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Pregunta_Practico';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las preguntas prácticas');
    }
});

// Actualizar
app.put('/Pregunta_Practico/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Pregunta_texto, Punteo } = req.query;
        const sql = 'UPDATE Pregunta_Practico SET Pregunta_texto = :1, Punteo = :2 WHERE Id_pregunta_practico = :3';
        await db.open(sql, [Pregunta_texto, Punteo, id], true);
        res.send('Pregunta práctica actualizada correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar la pregunta práctica');
    }
});

// Eliminar
app.delete('/Pregunta_Practico/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Pregunta_Practico WHERE Id_pregunta_practico = :1';
        await db.open(sql, [id], true);
        res.send('Pregunta práctica eliminada correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al eliminar la pregunta práctica');
    }
});

// -------------------------------------- CRUD Escuela -----------------------------------//
// Crear
app.post('/Escuela', async (req, res) => {
    try {
        const { Id_escuela, Nombre, Direccion, Acuerdo } = req.query;
        const sql = 'INSERT INTO Escuela (Id_escuela, Nombre, Direccion, Acuerdo) VALUES (:1, :2, :3, :4)';
        await db.open(sql, [Id_escuela, Nombre, Direccion, Acuerdo], true);
        res.send('Escuela creada correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear la escuela');
    }
});

// Leer
app.get('/Escuela', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Escuela';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las escuelas');
    }
});

// Actualizar
app.put('/Escuela/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre, Direccion, Acuerdo } = req.query;
        const sql = 'UPDATE Escuela SET Nombre = :1, Direccion = :2, Acuerdo = :3 WHERE Id_escuela = :4';
        await db.open(sql, [Nombre, Direccion, Acuerdo, id], true);
        res.send('Escuela actualizada correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar la escuela');
    }
});

// Eliminar
app.delete('/Escuela/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Escuela WHERE Id_escuela = :1';
        await db.open(sql, [id], true);
        res.send('Escuela eliminada correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al eliminar la escuela');
    }
});

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));