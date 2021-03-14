import oracledb from 'oracledb'
require('dotenv/config');

let connection: oracledb.Connection

export default async function Open(sql: string, binds: Array<any>, autoCommit?: Boolean) {

    let result;

    try {

      console.log('--> Starting database connection.');

      //console.log(`- USER:  ${process.env.NODE_ORACLEDB_USER}`)
      //console.log(`- PASSWORD: ${process.env.NODE_ORACLEDB_PASSWORD}`)
      //console.log(`- CONNECT STRING: ${process.env.NODE_ORACLEDB_CONNECTIONSTRING}`)



      connection = await oracledb.getConnection({
          user          : process.env.NODE_ORACLEDB_USER,
          password      : process.env.NODE_ORACLEDB_PASSWORD,
          connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING
        });
  
      console.log('--> Connection was successful!');

      result = await connection.execute(sql, binds)
      connection.release;
  
    } catch (err) {
      console.error(`--> Error database connection: ${err}`);
    } finally {
      if (connection) {
        try {
          await connection.close();
          console.log('--> Connection closed successfully');
        } catch (err) {
          console.error(`--> Error when disconnecting from the database: ${err}`);
        }
      }
    }

    return result;
  }

