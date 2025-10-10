const oracledb = require('oracledb');

const dbConfig = {
  user: 'system',
  password: 'oracle',
  connectString: 'localhost:1522/XE' 
};

async function open(sql, binds = [], autoCommit = false) {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(sql, binds, { autoCommit });
        return result;
    } catch (err) {
        console.error('Error en la conexión o en la consulta', err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error al cerrar la conexión: ', err);
            }
        }
    }
}

module.exports = { open };