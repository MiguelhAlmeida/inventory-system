import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Servidor com TypeScript");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});