const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido al sistema"
    });
});

app.get("/aprendices", (req, res) => {
    res.json({
        mensaje: "Gestión de aprendices"
    });
});

app.get("/programas", (req, res) => {
    res.json({
        mensaje: "Gestión de programas de formación"
    });
});

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor ejecutándose en http://10.5.225.45:${PORT}`);
});