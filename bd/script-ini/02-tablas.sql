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
  FOREIGN KEY (Id_departamento) REFERENCES Departamento(Id_departamento)
);

CREATE TABLE Ubicacion
(
  Id_Centro INT NOT NULL,
  Id_escuela INT NOT NULL,
  PRIMARY KEY (Id_Centro, Id_escuela),
  FOREIGN KEY (Id_Centro) REFERENCES Centro(Id_Centro),
  FOREIGN KEY (Id_escuela) REFERENCES Escuela(Id_escuela)
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
  FOREIGN KEY (Id_Centro, Id_escuela) REFERENCES Ubicacion(Id_Centro, Id_escuela),
  FOREIGN KEY (Id_municipio) REFERENCES Municipio(Id_municipio)
);

CREATE TABLE Examen
(
  Id_examen INT NOT NULL,
  Id_correlativo INT NOT NULL,
  Id_registro INT NOT NULL,
  PRIMARY KEY (Id_examen),
  FOREIGN KEY (Id_correlativo) REFERENCES Correlativo(Id_correlativo),
  FOREIGN KEY (Id_registro) REFERENCES Registro(Id_registro)
);

CREATE TABLE Respuesta_Usuario
(
  Id_respuesta_usuario INT NOT NULL,
  Respuesta INT NOT NULL,
  id_pregunta INT NOT NULL,
  Id_examen INT NOT NULL,
  PRIMARY KEY (Id_respuesta_usuario),
  FOREIGN KEY (id_pregunta) REFERENCES Pregunta_Teorico(id_pregunta),
  FOREIGN KEY (Id_examen) REFERENCES Examen(Id_examen)
);

CREATE TABLE Respuesta_Practico_Usuario
(
  Id_respuesta_practico INT NOT NULL,
  Nota INT NOT NULL,
  Id_pregunta_practico INT NOT NULL,
  Id_examen INT NOT NULL,
  PRIMARY KEY (Id_respuesta_practico),
  FOREIGN KEY (Id_pregunta_practico) REFERENCES Pregunta_Practico(Id_pregunta_practico),
  FOREIGN KEY (Id_examen) REFERENCES Examen(Id_examen)
);

ALTER TABLE Pregunta_Teorico MODIFY pregunta_texto VARCHAR2(150);
