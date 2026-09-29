require("dotenv").config();
const db = require("./database/models");

db.sequelize.authenticate()
    .then(() => console.log("DB conectado com sucesso!"))
    .catch((err) => console.error("Erro ao conectar no DB:", err));