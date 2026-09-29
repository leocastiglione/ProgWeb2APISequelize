const errorHandlerMiddleware = (err, req, res, next) => {
 const status = err.status || 500;
 return res.status(status).json({
 mensagem: err.message || 'Erro interno do servidor'
 });
};
module.exports = errorHandlerMiddleware;