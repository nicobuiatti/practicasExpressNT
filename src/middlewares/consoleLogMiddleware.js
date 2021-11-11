const consoleLogMiddleware = (req, res, next) => {
    if (false) {
        res.status(500).send("NO FUNCO");
    }
    next();
};

module.exports = consoleLogMiddleware;
