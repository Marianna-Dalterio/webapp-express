const express = require("express");
const router = express.Router();
const query = require("../controllers/query");


//rotta store per creazione recensioni 
router.post("/", query.store);

module.exports = router