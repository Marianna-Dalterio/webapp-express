const express = require("express");
const router = express.Router();

//usiamo router x definire le rotte
router.get("/", (req, res) => {
    res.send("Lista movies");
});

router.get("/:id", (req, res) => {
    res.send("Dettagli del film" + req.params.id);
});

module.exports = router