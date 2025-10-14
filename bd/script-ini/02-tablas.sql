ALTER SESSION SET CURRENT_SCHEMA = SYSTEM;

CREATE TABLE Centro
(
  Id_Centro INT NOT NULL,
  Nombre VARCHAR2(50) NOT NULL,
  PRIMARY KEY (Id_Centro)
);

CREATE TABLE Pregunta_Teorico
(
  id_pregunta INT NOT NULL,
  pregunta_texto VARCHAR2(100) NOT NULL,
  Respuesta INT NOT NULL,
  Res1 VARCHAR2(100) NOT NULL,
  Res2 VARCHAR2(100) NOT NULL,
  Res3 VARCHAR2(100) NOT NULL,
  Res4 VARCHAR2(100) NOT NULL,
  PRIMARY KEY (id_pregunta)
);

CREATE TABLE Pregunta_Practico
(
  Id_pregunta_practico INT NOT NULL,
  Pregunta_texto VARCHAR2(100) NOT NULL,
  Punteo INT NOT NULL,
  PRIMARY KEY (Id_pregunta_practico)
);

CREATE TABLE Escuela
(
  Id_escuela INT NOT NULL,
  Nombre CHAR(100) NOT NULL,
  Direccion VARCHAR2(100) NOT NULL,
  Acuerdo VARCHAR2(20) NOT NULL,
  PRIMARY KEY (Id_escuela)
);

CREATE TABLE Departamento
(
  Id_departamento INT NOT NULL,
  Nombre CHAR(50) NOT NULL,
  Codigo INT NOT NULL,
  PRIMARY KEY (Id_departamento)
);

CREATE TABLE Municipio
(
  Id_municipio INT NOT NULL,
  Nombre CHAR(100) NOT NULL,
  Codigo INT NOT NULL,
  Id_departamento INT NOT NULL,
  PRIMARY KEY (Id_municipio),
  FOREIGN KEY (Id_departamento) REFERENCES Departamento(Id_departamento) ON DELETE CASCADE
);

CREATE TABLE Ubicacion
(
  Id_Centro INT NOT NULL,
  Id_escuela INT NOT NULL,
  PRIMARY KEY (Id_Centro, Id_escuela),
  FOREIGN KEY (Id_Centro) REFERENCES Centro(Id_Centro) ON DELETE CASCADE,
  FOREIGN KEY (Id_escuela) REFERENCES Escuela(Id_escuela) ON DELETE CASCADE
);

CREATE TABLE Correlativo
(
  Id_correlativo INT NOT NULL,
  Fecha DATE NOT NULL,
  No_examen INT NOT NULL,
  PRIMARY KEY (Id_correlativo)
);

CREATE TABLE Registro
(
  Id_registro INT NOT NULL,
  Fecha DATE NOT NULL,
  Tipo_tramite VARCHAR2(50) NOT NULL,
  Tipo_licencia CHAR(1) NOT NULL,
  Nombre_completo VARCHAR2(50) NOT NULL,
  Genero CHAR(1) NOT NULL CHECK(Genero IN ('F', 'f', 'M', 'm')),
  Id_Centro INT NOT NULL,
  Id_escuela INT NOT NULL,
  Id_municipio INT NOT NULL,
  PRIMARY KEY (Id_registro),
  FOREIGN KEY (Id_Centro, Id_escuela) REFERENCES Ubicacion(Id_Centro, Id_escuela) ON DELETE CASCADE,
  FOREIGN KEY (Id_municipio) REFERENCES Municipio(Id_municipio) ON DELETE CASCADE
);

CREATE TABLE Examen
(
  Id_examen INT NOT NULL,
  Id_correlativo INT NOT NULL,
  Id_registro INT NOT NULL,
  PRIMARY KEY (Id_examen),
  FOREIGN KEY (Id_correlativo) REFERENCES Correlativo(Id_correlativo) ON DELETE CASCADE,
  FOREIGN KEY (Id_registro) REFERENCES Registro(Id_registro) ON DELETE CASCADE
);

CREATE TABLE Respuesta_Usuario
(
  Id_respuesta_usuario INT NOT NULL,
  Respuesta INT NOT NULL,
  id_pregunta INT NOT NULL,
  Id_examen INT NOT NULL,
  PRIMARY KEY (Id_respuesta_usuario),
  FOREIGN KEY (id_pregunta) REFERENCES Pregunta_Teorico(id_pregunta) ON DELETE CASCADE,
  FOREIGN KEY (Id_examen) REFERENCES Examen(Id_examen) ON DELETE CASCADE
);

CREATE TABLE Respuesta_Practico_Usuario
(
  Id_respuesta_practico INT NOT NULL,
  Nota INT NOT NULL,
  Id_pregunta_practico INT NOT NULL,
  Id_examen INT NOT NULL,
  PRIMARY KEY (Id_respuesta_practico),
  FOREIGN KEY (Id_pregunta_practico) REFERENCES Pregunta_Practico(Id_pregunta_practico)  ON DELETE CASCADE,
  FOREIGN KEY (Id_examen) REFERENCES Examen(Id_examen) ON DELETE CASCADE
);

ALTER TABLE Pregunta_Teorico MODIFY pregunta_texto VARCHAR2(150);

--crear la vista para estudiantes aprobados y reprobados, usada en las consultas 1 y 2
CREATE OR REPLACE VIEW Notas AS
SELECT 
    c.Id_correlativo,
    e.Id_examen,
    re.Nombre_completo,
    re.Genero,
    re.Tipo_licencia,
    cen.Nombre AS Centro,  
    esc.Nombre AS Escuela, 
    mu.Nombre AS MUNICIPIO,
    de.Nombre AS DEPARTAMENTO,
    c.Fecha AS FECHA_EXAMEN,
    (SELECT COUNT(*) * 4
     FROM Respuesta_Usuario ru
     INNER JOIN Pregunta_Teorico pt ON ru.id_pregunta = pt.id_pregunta
     WHERE ru.Id_examen = e.Id_examen 
       AND ru.Respuesta = pt.Respuesta) AS Puntaje_Teorico,
    (SELECT AVG(Nota) * 10
     FROM Respuesta_Practico_Usuario 
     WHERE Id_examen = e.Id_examen) AS Puntaje_Practico,
    (
      (SELECT COUNT(*) * 4
        FROM Respuesta_Usuario ru
        INNER JOIN Pregunta_Teorico pt ON ru.id_pregunta = pt.id_pregunta
        WHERE ru.Id_examen = e.Id_examen 
        AND ru.Respuesta = pt.Respuesta) 
      +
      (SELECT AVG(Nota) * 10
        FROM Respuesta_Practico_Usuario 
        WHERE Id_examen = e.Id_examen)
    ) AS Punteo_Total,
    CASE
        WHEN (SELECT COUNT(*) * 4 FROM Respuesta_Usuario ru
              INNER JOIN Pregunta_Teorico pt ON ru.id_pregunta = pt.id_pregunta
              WHERE ru.Id_examen = e.Id_examen AND ru.Respuesta = pt.Respuesta) >= 70 
             AND (SELECT AVG(Nota) * 10 FROM Respuesta_Practico_Usuario 
                  WHERE Id_examen = e.Id_examen) >= 70 
        THEN 'APROBADO'
        ELSE 'REPROBADO'
    END AS RESULTADO
FROM Correlativo c
INNER JOIN Examen e ON c.Id_correlativo = e.Id_correlativo
INNER JOIN Registro re ON e.Id_registro = re.Id_registro
INNER JOIN Centro cen ON re.Id_Centro = cen.Id_Centro  
INNER JOIN Escuela esc ON re.Id_escuela = esc.Id_escuela  
INNER JOIN Municipio mu ON re.Id_municipio = mu.Id_municipio
INNER JOIN Departamento de ON mu.Id_departamento = de.Id_departamento;
/