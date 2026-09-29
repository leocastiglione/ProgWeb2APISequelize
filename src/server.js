const express = require('express');
const usuariosRoutes = require('./routes/usuarios.routes');
const healthRoutes = require('./routes/health.routes');
const authRoutes = require('./routes/auth.routes');
const logMiddleware = require('./middlewares/log.middleware');
const notFoundMiddleware = require('./middlewares/notFound.middleware');
const errorHandlerMiddleware = require('./middlewares/errorHandler.middleware');
require('dotenv').config(); 
const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(logMiddleware);
app.use('/health', healthRoutes);
app.use('/api/v1/usuarios', usuariosRoutes);
app.use('/auth', authRoutes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
app.listen(PORT, () => {
 console.log(
    `Servidor executando em http://localhost:${PORT}`
    
 );
});