const connection = require("../database/connection");

//rotta index (lista film)
function index(req, res) {
    const sql = `SELECT * FROM movies`
    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: "Query fallita" });
        res.json(result)
    });

}

//rotta show (dettagli film + recensioni)
function show(req, res) {
    const id = req.params.id //prendo id da richiesta browser 
    const sqlMovies = `SELECT * FROM movies WHERE id=? `;
    const sqlReviews = `SELECT * FROM reviews WHERE movie_id=?`;

    connection.query(sqlMovies, [id], (errMovies, resultsMovies) => {
        if (errMovies) return res.status(500).json({ error: "Query fallita" });
        if (resultsMovies.length === 0) return res.status(400).json({ error: "Film non trovato" }); //metodo connection.query esecuzione query 

        connection.query(sqlReviews, [id], (errorReviews, resultsReviews) => {
            if (errorReviews) return res.status(500).json({ error: "query fallita" });
            const movieRev = { ...resultsMovies[0], reviews: resultsReviews };
            res.json(movieRev);
        });
    });

}

// 🎯 NUOVA ROTTA: store (gestisce l'aggiunta di una recensione)
function store(req, res, next) {
    //prendo i dati dal corpo della richiesta
    const { name, text, vote, movie_id } = req.body
    //query sql x inserire la recensione
    const sql = `INSERT INTO reviews (name, text, vote, movie_id) VALUES (?, ?, ?, ?)`;
    //eseguo la query
    connection.query(sql, [name, text, vote, movie_id], (err, result) => {
        if (err) return next(err);
        res.status(201).json({
            message: "Recensione aggiunta con successo",
            review_id: result.insertId, // <-- Qui prendi l'ID generato dal DB
            data: req.body
        });
    });
}



module.exports = { index, show, store }