const express = require("express");
const router = express.Router();

const query = require("../database/query");

//rotta index che chiamo con app.metodo ed in cui indico path(URL) e richiamo dal file query
router.get("/", query.index);

router.get("/:id", query.show);

module.exports = router;