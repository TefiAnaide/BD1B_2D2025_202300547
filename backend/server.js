const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

//-------------------------------------1 CRUD Centros -----------------------------------//
//crear
app.post('/centros', async (req, res) => {
    try {
        const { Id_Centro, Nombre } = req.body;
        const sql = 'INSERT INTO Centro (Id_Centro, Nombre) VALUES (:1, :2)';
        await db.open(sql, [Id_Centro, Nombre], true);
        res.status(201).json({message: 'Centro creado'});
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear el centro');
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
        const { Nombre } = req.body;
        const sql = 'UPDATE Centro SET Nombre = :1 WHERE Id_Centro = :2';
        await db.open(sql, [Nombre, id], true);
        res.json({message: 'Centro actualizado'});
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
        res.json({ message: 'Centro eliminado'});
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar el centro');
    }
});

//-----------------------------2 CRUD Pregunta_Teorico -----------------------------//
// Crear
app.post('/preguntas-teorico', async (req, res) => {
    try {
        const { id_pregunta, pregunta_texto, Respuesta, Res1, Res2, Res3, Res4 } = req.body;
        const sql = `INSERT INTO Pregunta_Teorico (id_pregunta, pregunta_texto, Respuesta, Res1, Res2, Res3, Res4)
                     VALUES (:1, :2, :3, :4, :5, :6, :7)`;
        await db.open(sql, [id_pregunta, pregunta_texto, Respuesta, Res1, Res2, Res3, Res4], true);
        res.status(201).json({ message: 'Pregunta teórica creada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear la pregunta teórica');
    }
});

// Leer
app.get('/preguntas-teorico', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Pregunta_Teorico';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las preguntas teóricas');
    }
});

// Actualizar
app.put('/preguntas-teorico/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { pregunta_texto, Respuesta, Res1, Res2, Res3, Res4 } = req.body;
        const sql = `UPDATE Pregunta_Teorico SET pregunta_texto = :1, Respuesta = :2, Res1 = :3, Res2 = :4, Res3 = :5, Res4 = :6
                     WHERE id_pregunta = :7`;
        await db.open(sql, [pregunta_texto, Respuesta, Res1, Res2, Res3, Res4, id], true);
        res.json({ message: 'Pregunta teórica actualizada' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar la pregunta teórica');
    }
});

// Eliminar
app.delete('/preguntas-teorico/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Pregunta_Teorico WHERE id_pregunta = :1';
        await db.open(sql, [id], true);
        res.json({ message: 'Pregunta teórica eliminada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar la pregunta teórica');
    }
});

//-----------------------------3 CRUD Pregunta_Practico -----------------------------//
app.post('/preguntas-practico', async (req, res) => {
    try {
        const { Id_pregunta_practico, Pregunta_texto, Punteo } = req.body;
        const sql = `INSERT INTO Pregunta_Practico (Id_pregunta_practico, Pregunta_texto, Punteo)
                     VALUES (:1, :2, :3)`;
        await db.open(sql, [Id_pregunta_practico, Pregunta_texto, Punteo], true);
        res.status(201).json({ message: 'Pregunta práctica creada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear la pregunta práctica');
    }
});

app.get('/preguntas-practico', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Pregunta_Practico';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las preguntas prácticas');
    }
});

app.put('/preguntas-practico/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Pregunta_texto, Punteo } = req.body;
        const sql = `UPDATE Pregunta_Practico SET Pregunta_texto = :1, Punteo = :2 WHERE Id_pregunta_practico = :3`;
        await db.open(sql, [Pregunta_texto, Punteo, id], true);
        res.json({ message: 'Pregunta práctica actualizada' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar la pregunta práctica');
    }
});

app.delete('/preguntas-practico/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Pregunta_Practico WHERE Id_pregunta_practico = :1';
        await db.open(sql, [id], true);
        res.json({ message: 'Pregunta práctica eliminada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar la pregunta práctica');
    }
});

//-----------------------------4 CRUD Escuela -----------------------------//
app.post('/escuelas', async (req, res) => {
    try {
        const { Id_escuela, Nombre, Direccion, Acuerdo } = req.body;
        const sql = `INSERT INTO Escuela (Id_escuela, Nombre, Direccion, Acuerdo)
                     VALUES (:1, :2, :3, :4)`;
        await db.open(sql, [Id_escuela, Nombre, Direccion, Acuerdo], true);
        res.status(201).json({ message: 'Escuela creada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear la escuela');
    }
});

app.get('/escuelas', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Escuela';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las escuelas');
    }
});

app.put('/escuelas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre, Direccion, Acuerdo } = req.body;
        const sql = `UPDATE Escuela SET Nombre = :1, Direccion = :2, Acuerdo = :3 WHERE Id_escuela = :4`;
        await db.open(sql, [Nombre, Direccion, Acuerdo, id], true);
        res.json({ message: 'Escuela actualizada' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar la escuela');
    }
});

app.delete('/escuelas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Escuela WHERE Id_escuela = :1';
        await db.open(sql, [id], true);
        res.json({ message: 'Escuela eliminada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar la escuela');
    }
});

//-----------------------------5 CRUD Departamento -----------------------------//
app.post('/departamentos', async (req, res) => {
    try {
        const { Id_departamento, Nombre, Codigo } = req.body;
        const sql = `INSERT INTO Departamento (Id_departamento, Nombre, Codigo)
                     VALUES (:1, :2, :3)`;
        await db.open(sql, [Id_departamento, Nombre, Codigo], true);
        res.status(201).json({ message: 'Departamento creado' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear el departamento');
    }
});

app.get('/departamentos', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Departamento';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los departamentos');
    }
});

app.put('/departamentos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre, Codigo } = req.body;
        const sql = `UPDATE Departamento SET Nombre = :1, Codigo = :2 WHERE Id_departamento = :3`;
        await db.open(sql, [Nombre, Codigo, id], true);
        res.json({ message: 'Departamento actualizado' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar el departamento');
    }
});

app.delete('/departamentos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Departamento WHERE Id_departamento = :1';
        await db.open(sql, [id], true);
        res.json({ message: 'Departamento eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar el departamento');
    }
});

//-----------------------------6 CRUD Municipio -----------------------------//
app.post('/municipios', async (req, res) => {
    try {
        const { Id_municipio, Nombre, Codigo, Id_departamento } = req.body;
        const sql = `INSERT INTO Municipio (Id_municipio, Nombre, Codigo, Id_departamento)
                     VALUES (:1, :2, :3, :4)`;
        await db.open(sql, [Id_municipio, Nombre, Codigo, Id_departamento], true);
        res.status(201).json({ message: 'Municipio creado' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear el municipio');
    }
});

app.get('/municipios', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Municipio';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los municipios');
    }
});

app.put('/municipios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre, Codigo, Id_departamento } = req.body;
        const sql = `UPDATE Municipio SET Nombre = :1, Codigo = :2, Id_departamento = :3 WHERE Id_municipio = :4`;
        await db.open(sql, [Nombre, Codigo, Id_departamento, id], true);
        res.json({ message: 'Municipio actualizado' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar el municipio');
    }
});

app.delete('/municipios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Municipio WHERE Id_municipio = :1';
        await db.open(sql, [id], true);
        res.json({ message: 'Municipio eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar el municipio');
    }
});

//-----------------------------7 CRUD Ubicacion -----------------------------//
app.post('/ubicaciones', async (req, res) => {
    try {
        const { Id_Centro, Id_escuela } = req.body;
        const sql = `INSERT INTO Ubicacion (Id_Centro, Id_escuela)
                     VALUES (:1, :2)`;
        await db.open(sql, [Id_Centro, Id_escuela], true);
        res.status(201).json({ message: 'Ubicación creada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear la ubicación');
    }
});

app.get('/ubicaciones', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Ubicacion';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las ubicaciones');
    }
});

app.put('/ubicaciones/:id_centro/:id_escuela', async (req, res) => {
    try {
        const { id_centro, id_escuela } = req.params;
        const { new_Id_Centro, new_Id_escuela } = req.body;
        const sql = `UPDATE Ubicacion SET Id_Centro = :1, Id_escuela = :2 WHERE Id_Centro = :3 AND Id_escuela = :4`;
        await db.open(sql, [new_Id_Centro, new_Id_escuela, id_centro, id_escuela], true);
        res.json({ message: 'Ubicación actualizada' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar la ubicación');
    }
});

app.delete('/ubicaciones/:id_centro/:id_escuela', async (req, res) => {
    try {
        const { id_centro, id_escuela } = req.params;
        const sql = 'DELETE FROM Ubicacion WHERE Id_Centro = :1 AND Id_escuela = :2';
        await db.open(sql, [id_centro, id_escuela], true);
        res.json({ message: 'Ubicación eliminada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar la ubicación');
    }
});

//-----------------------------8 CRUD Correlativo -----------------------------//
app.post('/correlativos', async (req, res) => {
    try {
        const { Id_correlativo, Fecha, No_examen } = req.body;
        const sql = `INSERT INTO Correlativo (Id_correlativo, Fecha, No_examen)
                     VALUES (:1, :2, :3)`;
        await db.open(sql, [Id_correlativo, Fecha, No_examen], true);
        res.status(201).json({ message: 'Correlativo creado' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear el correlativo');
    }
});

app.get('/correlativos', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Correlativo';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los correlativos');
    }
});

app.put('/correlativos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Fecha, No_examen } = req.body;
        const sql = `UPDATE Correlativo SET Fecha = :1, No_examen = :2 WHERE Id_correlativo = :3`;
        await db.open(sql, [Fecha, No_examen, id], true);
        res.json({ message: 'Correlativo actualizado' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar el correlativo');
    }
});

app.delete('/correlativos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Correlativo WHERE Id_correlativo = :1';
        await db.open(sql, [id], true);
        res.json({ message: 'Correlativo eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar el correlativo');
    }
});

//-----------------------------9 CRUD Registro -----------------------------//
app.post('/registros', async (req, res) => {
    try {
        const { Id_registro, Fecha, Tipo_tramite, Tipo_licencia, Nombre_completo, Genero, Id_Centro, Id_escuela, Id_municipio } = req.body;
        const sql = `INSERT INTO Registro (Id_registro, Fecha, Tipo_tramite, Tipo_licencia, Nombre_completo, Genero, Id_Centro, Id_escuela, Id_municipio)
                     VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9)`;
        await db.open(sql, [Id_registro, Fecha, Tipo_tramite, Tipo_licencia, Nombre_completo, Genero, Id_Centro, Id_escuela, Id_municipio], true);
        res.status(201).json({ message: 'Registro creado' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear el registro');
    }
});

app.get('/registros', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Registro';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los registros');
    }
});

app.put('/registros/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Fecha, Tipo_tramite, Tipo_licencia, Nombre_completo, Genero, Id_Centro, Id_escuela, Id_municipio } = req.body;
        const sql = `UPDATE Registro SET Fecha = :1, Tipo_tramite = :2, Tipo_licencia = :3, Nombre_completo = :4, Genero = :5, Id_Centro = :6, Id_escuela = :7, Id_municipio = :8
                     WHERE Id_registro = :9`;
        await db.open(sql, [Fecha, Tipo_tramite, Tipo_licencia, Nombre_completo, Genero, Id_Centro, Id_escuela, Id_municipio, id], true);
        res.json({ message: 'Registro actualizado' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar el registro');
    }
});

app.delete('/registros/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Registro WHERE Id_registro = :1';
        await db.open(sql, [id], true);
        res.json({ message: 'Registro eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar el registro');
    }
});

//-----------------------------10 CRUD Examen -----------------------------//
app.post('/examenes', async (req, res) => {
    try {
        const { Id_examen, Id_correlativo, Id_registro } = req.body;
        const sql = `INSERT INTO Examen (Id_examen, Id_correlativo, Id_registro)
                     VALUES (:1, :2, :3)`;
        await db.open(sql, [Id_examen, Id_correlativo, Id_registro], true);
        res.status(201).json({ message: 'Examen creado' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear el examen');
    }
});

app.get('/examenes', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Examen';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los exámenes');
    }
});

app.put('/examenes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Id_correlativo, Id_registro } = req.body;
        const sql = `UPDATE Examen SET Id_correlativo = :1, Id_registro = :2 WHERE Id_examen = :3`;
        await db.open(sql, [Id_correlativo, Id_registro, id], true);
        res.json({ message: 'Examen actualizado' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar el examen');
    }
});

app.delete('/examenes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Examen WHERE Id_examen = :1';
        await db.open(sql, [id], true);
        res.json({ message: 'Examen eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar el examen');
    }
});

//-----------------------------11 CRUD Respuesta_Usuario -----------------------------//
app.post('/respuestas-usuario', async (req, res) => {
    try {
        const { Id_respuesta_usuario, Respuesta, id_pregunta, Id_examen } = req.body;
        const sql = `INSERT INTO Respuesta_Usuario (Id_respuesta_usuario, Respuesta, id_pregunta, Id_examen)
                     VALUES (:1, :2, :3, :4)`;
        await db.open(sql, [Id_respuesta_usuario, Respuesta, id_pregunta, Id_examen], true);
        res.status(201).json({ message: 'Respuesta de usuario creada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear la respuesta de usuario');
    }
});

app.get('/respuestas-usuario', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Respuesta_Usuario';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las respuestas de usuario');
    }
});

app.put('/respuestas-usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Respuesta, id_pregunta, Id_examen } = req.body;
        const sql = `UPDATE Respuesta_Usuario SET Respuesta = :1, id_pregunta = :2, Id_examen = :3 WHERE Id_respuesta_usuario = :4`;
        await db.open(sql, [Respuesta, id_pregunta, Id_examen, id], true);
        res.json({ message: 'Respuesta de usuario actualizada' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar la respuesta de usuario');
    }
});

app.delete('/respuestas-usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Respuesta_Usuario WHERE Id_respuesta_usuario = :1';
        await db.open(sql, [id], true);
        res.json({ message: 'Respuesta de usuario eliminada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar la respuesta de usuario');
    }
});

//-----------------------------12 CRUD Respuesta_Practico_Usuario -----------------------------//
app.post('/respuestas-practico-usuario', async (req, res) => {
    try {
        const { Id_respuesta_practico, Nota, Id_pregunta_practico, Id_examen } = req.body;
        const sql = `INSERT INTO Respuesta_Practico_Usuario (Id_respuesta_practico, Nota, Id_pregunta_practico, Id_examen)
                     VALUES (:1, :2, :3, :4)`;
        await db.open(sql, [Id_respuesta_practico, Nota, Id_pregunta_practico, Id_examen], true);
        res.status(201).json({ message: 'Respuesta práctica de usuario creada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al crear la respuesta práctica de usuario');
    }
});

app.get('/respuestas-practico-usuario', async (req, res) => {
    try {
        const sql = 'SELECT * FROM Respuesta_Practico_Usuario';
        const result = await db.open(sql, [], false);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las respuestas prácticas de usuario');
    }
});

app.put('/respuestas-practico-usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Nota, Id_pregunta_practico, Id_examen } = req.body;
        const sql = `UPDATE Respuesta_Practico_Usuario SET Nota = :1, Id_pregunta_practico = :2, Id_examen = :3 WHERE Id_respuesta_practico = :4`;
        await db.open(sql, [Nota, Id_pregunta_practico, Id_examen, id], true);
        res.json({ message: 'Respuesta práctica de usuario actualizada' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar la respuesta práctica de usuario');
    }
});

app.delete('/respuestas-practico-usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM Respuesta_Practico_Usuario WHERE Id_respuesta_practico = :1';
        await db.open(sql, [id], true);
        res.json({ message: 'Respuesta práctica de usuario eliminada' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Error al eliminar la respuesta práctica de usuario');
    }
});

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'));