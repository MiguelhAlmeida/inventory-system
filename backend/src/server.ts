import express from "express";
import productRoutes from "./routes/product.routes";
import { json } from "node:stream/consumers";

const app = express();

app.use(express.json());
app.use(productRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});