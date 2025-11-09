const express = require("express"); //richiedo express
const query = require("./database/query"); //importo query
const app = express(); //creo costante con oggetto express che ha una serie di funzioni come app.get/app.use/app.listen
const port = 3000; //indico la porta 


app.use(express.static("public")); //uso funzione di express per dire leggi i file statici dalla cartella public quindi così come sono, senza essere processati (diverso da assets)


app.listen(port, () => {
  console.log(`In ascolto in http://localhost:${port}`);
}); //metto server in ascolto sulla porta e gli passo funzione di callback


app.get("/", (req, res) => {
  res.send("Benvenuto nel mio server")
})
//rotta index che chiamo con app.metodo ed in cui indico path(URL) e richiamo dal file query
app.get("/index", query.index);

app.get("/movies/:id", query.show);