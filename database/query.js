const connection = require("./connection");

//rotta index
function index(req, res) {
    const sql = `SELECT * FROM movies`
    connection.query(sql, (err, result) => {
        if (err) return err.status(500).json({ error: "query fallita" });
        res.json(result)
    });

}

//rotta show (dettagli film + recensioni)
function show(req, res) {
    const id = req.params.id
    const sql = `SELECT * FROM movies RIGHT JOIN reviews ON movies.id=reviews.movie_id WHERE movies.id=? `;

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: "query fallita" })
        if (results.length === 0) return res.status(400).json({ error: "Film non trovato" });
        res.json(results)
    })


}



module.exports = { index, show }