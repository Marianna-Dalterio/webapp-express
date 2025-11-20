function NotFound(req, res, next) {
    res.status(400).json({ message: "Rotta non trovata" })
};

module.exports = { NotFound }