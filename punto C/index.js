const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bienvenido.");
});

app.get("/aprendices", (req, res) => {
    res.send("Aprendices SENA.");
});

app.get("/programas", (req, res) => {
    res.send("Gestión de programas.");
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});