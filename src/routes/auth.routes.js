const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { findById } = require("../repositories/usuarios.repository");

const router = express.Router();

router.post("/api/v1/usuarios", (req, res) => {
    const {id, senha} = req.body;

    if(!id || !senha)
        return res.status(400).json({message: "Informe username e password."});

    const user =  findById(id);
    if(!user)
        return res.status(401).json({message: "Credenciais inválidas."});

    const ok = bcrypt.compareSync(senha, user.senha);
    if(!ok)
        return res.status(401).json({message: "Credenciais inválidas."});

    const payload = {
        id: String(user.id),
        nome: user.nome,
        email: user.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    return res.json({
        tokenType: "Bearer",
        accessToken: token,
        expiresIn: process.env.JWT_EXPIRES_IN
    });
});

module.exports = router;