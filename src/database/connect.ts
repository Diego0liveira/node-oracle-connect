
'use strict';
import oracledb from 'oracledb'
import { user, password, connectString, externalAuth } from './dbconfig';


async function run() {

    let connection: oracledb.Connection
  
    try {

      console.log('--> Starting database connection.');

      console.log(`- USER:  ${user}`)
      console.log(`- PASSWORD: ${password}`)
      console.log(`- CONNECT STRING: ${connectString}`)
      console.log(`- EXTERNAL AUTH: ${externalAuth}`)
      
      connection = await oracledb.getConnection({
          user          : user,
          password      : password,
          connectString : connectString
        });
  
      console.log('--> Connection was successful!');
  
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  
  run();