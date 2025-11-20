function ServerError(err, req, res, next) {
    console.log(err.stack);
    res.status(500).json({ message: "Errore lato Server" })
};

module.exports = ServerError