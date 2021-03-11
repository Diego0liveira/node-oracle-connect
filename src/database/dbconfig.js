module.exports = {
    user          : process.env.NODE_ORACLEDB_USER || "dbcred",
    password      : process.env.NODE_ORACLEDB_PASSWORD || "Dbcred2010",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "192.168.2.40/pdbconfirme",
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
    
  };