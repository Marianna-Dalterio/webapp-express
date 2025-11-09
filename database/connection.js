//imposto configurazioni mysql
const mysql = require("mysql2"); //richiedo mysql2

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});  //creo connessione tra server e db per raccogliere dati dal db, createConnection è una funzione con dentro un oggetto contenente coppie chiave valore; passo le credenziali di accesso usando il metodo Process

//gestisco eventuale errore di connessione altrimenti mostra messaggio connessione riuscita

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL Database")
})

module.exports = connection;