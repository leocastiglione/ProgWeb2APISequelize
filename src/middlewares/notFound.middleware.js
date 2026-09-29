const notFoundMiddleware = (req, res, next) => {
    const erro = new Error(
        `Rota não encontrada: ${req.method} ${req.originalUrl}`
    );
    erro.status = 404;
    next(erro);
};
module.exports = notFoundMiddleware;