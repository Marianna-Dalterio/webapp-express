const express = require("express"); //richiedo express
const app = express(); //creo costante con oggetto express che ha una serie di funzioni come app.get/app.use/app.listen
const port = 3000; //indico la porta 
const connection = require("./database/connection");

const moviesRouter = require("./routers/movies"); //importo router


app.use(express.static("public")); //uso funzione di express per dire leggi i file statici dalla cartella public quindi così come sono, senza essere processati (diverso da assets)

app.use("/movies", moviesRouter); //indico a express che esistono nuove rotte indicando il prefisso da usare e quale router

app.listen(port, () => {
  console.log(`In ascolto in http://localhost ${port}`);
}); //metto server in ascolto sulla porta e gli passo funzione di callback
