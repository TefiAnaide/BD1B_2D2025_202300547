# Proyecto Fase 2: backend y exposición de servicios para la base de datos "Centro de Evaluación de Manejo"

## USO DE ENDPOINTS

#### Tabla Centros
- Agregar (POST)
    - LINK: http://localhost:3000/centros 
    - raw/JSON: 
     ```json
    {
        "Id_Centro": 1, "Nombre": "Centro de Evaluación Norte"
    }
    ```

- Visualizar (GET)
    - LINK: http://localhost:3000/centros
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/centros/2
    - raw/JSON: 
     ```json
    {
        "Nombre": "Centro de Evaluación Editado"
    }
    ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/centros/4
    - raw/JSON: 

#### Tabla Pregunta_Teorico
- Agregar (POST)
    - LINK: http://localhost:3000/preguntas-teorico
    - raw/JSON: 
     ```json
    {
        "id_pregunta": 1,
        "pregunta_texto": "¿Qué significa una señal circular roja?",
        "Respuesta": 2,
        "Res1": "Advertencia",
        "Res2": "Prohibición",
        "Res3": "Información",
        "Res4": "Recomendación"
    }
    ```

- Visualizar (GET)
    - LINK: http://localhost:3000/preguntas-teorico
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/preguntas-teorico/1
    - raw/JSON: 
     ```json
    {
    "pregunta_texto": "¿Qué significa la señal circular roja?",
    "Respuesta": 2,
    "Res1": "Advertencia",
    "Res2": "Prohibición",
    "Res3": "Detenerse",
    "Res4": "Girar"
  }
  ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/preguntas-teorico/4
    - raw/JSON: 

#### Tabla Pregunta_Practico
- Agregar (POST)
    - LINK: http://localhost:3000/preguntas-practico
    - raw/JSON: 
     ```json
    {"Id_pregunta_practico": 1, "Pregunta_texto": "Estacionamiento en paralelo", "Punteo": 25}
  ```

- Visualizar (GET)
    - LINK: http://localhost:3000/preguntas-practico
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/preguntas-practico/1
    - raw/JSON: 
     ```json
    {"Pregunta_texto": "Estacionamiento en paralelo edit", "Punteo": 25}
  ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/preguntas-practico/5
    - raw/JSON: 

#### Tabla Escuela
- Agregar (POST)
    - LINK: http://localhost:3000/escuelas
    - raw/JSON: 
     ```json
    {
        "Id_escuela": 1, 
        "Nombre": "Escuela de Manejo Veloz", 
        "Direccion": "Zona 1, Ciudad", 
        "Acuerdo": "ACU-2023-001"
    }
  ```

- Visualizar (GET)
    - LINK: http://localhost:3000/escuelas
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/escuelas/1
    - raw/JSON: 
     ```json
    {
        "Nombre": "Escuela editada", 
        "Direccion": "Zona 6, Ciudad", 
        "Acuerdo": "ACU-2025-001"
    }
  ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/escuelas/4
    - raw/JSON: 

#### Tabla Departamento
- Agregar (POST)
    - LINK: http://localhost:3000/departamentos
    - raw/JSON: 
     ```json
    {"Id_departamento": 1, "Nombre": "Guatemala", "Codigo": 1}
  ```

- Visualizar (GET)
    - LINK: http://localhost:3000/departamentos
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/departamentos/1
    - raw/JSON: 
     ```json
    {"Nombre": "Jutiapa", "Codigo": 1}
  ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/departamentos/4
    - raw/JSON: 

#### Tabla Municipio
- Agregar (POST)
    - LINK: http://localhost:3000/municipios
    - raw/JSON: 
     ```json
    {
        "Id_municipio": 1, 
        "Nombre": "Guatemala", 
        "Codigo": 1, 
        "Id_departamento": 1
    }
    ```

- Visualizar (GET)
    - LINK: http://localhost:3000/municipios
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/municipios/3
    - raw/JSON: 
     ```json
    {"Nombre": "San Jose", "Codigo": 1, "Id_departamento": 2}
    ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/municipios/5
    - raw/JSON: 

#### Tabla Ubicacion
- Agregar (POST)
    - LINK: http://localhost:3000/ubicaciones
    - raw/JSON: 
     ```json
    {"Id_Centro": 1, "Id_escuela": 1}
    ```

- Visualizar (GET)
    - LINK: http://localhost:3000/ubicaciones
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/ubicaciones/1/2
    - raw/JSON: 
    ```json
    {"new_Id_Centro": 2, "new_Id_escuela": 2}
    ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/ubicaciones/4/4
    - raw/JSON: 

#### Tabla Correlativo
- Agregar (POST)
    - LINK: http://localhost:3000/correlativos
    - raw/JSON: 
    ```json
    {"Id_correlativo": 1, "Fecha": "2024-01-15", "No_examen": 1001}
    ```

- Visualizar (GET)
    - LINK: http://localhost:3000/correlativos
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/correlativos/1
    - raw/JSON: 
    ```json
    {"Fecha": "2025-03-17", "No_examen": 1003}
    ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/correlativos/4
    - raw/JSON: 


#### Tabla Registro
- Agregar (POST)
    - LINK: http://localhost:3000/registros
    - raw/JSON: 
    ```json
    {
    "Id_registro": 1,
    "Fecha": "2024-01-15",
    "Tipo_tramite": "Primera vez",
    "Tipo_licencia": "A",
    "Nombre_completo": "Juan Pérez García",
    "Genero": "M",
    "Id_Centro": 1,
    "Id_escuela": 1,
    "Id_municipio": 1
  }
    ```

- Visualizar (GET)
    - LINK: http://localhost:3000/registros
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/registros/1
    - raw/JSON: 
    ```json
    {
    "Fecha": "2025-03-15",
    "Tipo_tramite": "Renovación",
    "Tipo_licencia": "A",
    "Nombre_completo": "Juan Pérez García",
    "Genero": "M",
    "Id_Centro": 1,
    "Id_escuela": 1,
    "Id_municipio": 1
  }
    ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/registros/4
    - raw/JSON: 


#### Tabla Examen
- Agregar (POST)
    - LINK: http://localhost:3000/examenes
    - raw/JSON: 
    ```json
     {"Id_examen": 1, "Id_correlativo": 1, "Id_registro": 1}
    ```

- Visualizar (GET)
    - LINK: http://localhost:3000/examenes
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: 
    - raw/JSON: 
    ```json
    {
        "Id_correlativo": 2,
        "Id_registro": 3
    }
    ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/examenes/4
    - raw/JSON: 

#### Tabla Respuesta_Usuario
- Agregar (POST)
    - LINK: http://localhost:3000/respuestas-usuario
    - raw/JSON: 
    ```json
    {
        "Id_respuesta_usuario": 1, 
        "Respuesta": 2, 
        "id_pregunta": 1, 
        "Id_examen": 1
    }
    ```

- Visualizar (GET)
    - LINK: http://localhost:3000/respuestas-usuario
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/respuestas-usuario/1
    - raw/JSON: 
    ```json
    {"Respuesta": 2, "id_pregunta": 1, "Id_examen": 3}
    ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/respuestas-usuario/5
    - raw/JSON: 

#### Tabla Respuesta_Practico_Usuario- Visualizar
- Agregar (POST)
    - LINK: http://localhost:3000/respuestas-practico-usuario
    - raw/JSON: 
    ```json
    {
        "Id_respuesta_practico": 1, 
        "Nota": 20, 
        "Id_pregunta_practico": 1, 
        "Id_examen": 1
    }
    ```

- Visualizar (GET)
    - LINK: http://localhost:3000/respuestas-practico-usuario
    - raw/JSON: 

- Actualizar (PUT)
    - LINK: http://localhost:3000/respuestas-practico-usuario/1
    - raw/JSON: 
    ```json
    {
        "Nota": 20, 
        "Id_pregunta_practico": 1, 
        "Id_examen": 2
    }
    ```

- Eliminar (DELETE)
    - LINK: http://localhost:3000/respuestas-practico-usuario/5
    - raw/JSON: 

#### Orden del DELETE:
1. http://localhost:3000/centros/4
2. http://localhost:3000/escuelas/4
3. http://localhost:3000/ubicaciones/4/4
4. http://localhost:3000/departamentos/4
5. http://localhost:3000/municipios/5
6. http://localhost:3000/preguntas-teorico/4
7. http://localhost:3000/preguntas-practico/5
8. http://localhost:3000/correlativos/4
9. http://localhost:3000/registros/4
10. http://localhost:3000/examenes/4
11. http://localhost:3000/respuestas-usuario/5
12. http://localhost:3000/respuestas-practico-usuario/5

## CAPTURA DE EVIDENCIAS
### CRUD

#### Tabla Centros
- Agregar
![](/img/C1.png)

- Visualizar
![](/img/c2.png)

- Actualizar
![](/img/c3.png)

- Eliminar
![](/img/c4.png)

#### Tabla Pregunta_Teorico
- Agregar
![](/img/c5.png)

- Visualizar
![](/img/c6.png)

- Actualizar
![](/img/c7.png)

- Eliminar
![](/img/c8.png)

#### Tabla Pregunta_Practico
- Agregar
![](/img/c9.png)

- Visualizar
![](/img/c10.png)

- Actualizar
![](/img/c11.png)

- Eliminar
![](/img/c12.png)

#### Tabla Escuela
- Agregar
![](/img/c13.png)

- Visualizar
![](/img/c14.png)

- Actualizar
![](/img/c15.png)

- Eliminar
![](/img/c16.png)

#### Tabla Departamento
- Agregar
![](/img/c17.png)

- Visualizar
![](/img/c18.png)

- Actualizar
![](/img/c19.png)

- Eliminar
![](/img/c20.png)

#### Tabla Municipio
- Agregar
![](/img/c21.png)

- Visualizar
![](/img/c22.png)

- Actualizar
![](/img/c23.png)

- Eliminar
![](/img/c24.png)

#### Tabla Ubicacion
- Agregar
![](/img/c25.png)

- Visualizar
![](/img/c26.png)

- Actualizar
![](/img/c27.png)

- Eliminar
![](/img/c28.png)

#### Tabla Correlativo
- Agregar
![](/img/c29.png)

- Visualizar
![](/img/c30.png)

- Actualizar
![](/img/c31.png)

- Eliminar
![](/img/c32.png)

#### Tabla Registro
- Agregar
![](/img/c33.png)

- Visualizar
![](/img/c34.png)

- Actualizar
![](/img/c35.png)

- Eliminar
![](/img/c36.png)

#### Tabla Examen
- Agregar
![](/img/c37.png)

- Visualizar
![](/img/c38.png)

- Actualizar
![](/img/c39.png)

- Eliminar
![](/img/c40.png)

#### Tabla Respuesta_Usuario
- Agregar
![](/img/c41.png)

- Visualizar
![](/img/c42.png)

- Actualizar
![](/img/c43.png)

- Eliminar
![](/img/c44.png)

#### Tabla Respuesta_Practico_Usuario
- Agregar
![](/img/c45.png)

- Visualizar
![](/img/c46.png)

- Actualizar
![](/img/c47.png)

- Eliminar
![](/img/c48.png)
