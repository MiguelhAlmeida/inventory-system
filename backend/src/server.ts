import express from "express";
import productRoutes from "./routes/product.routes";
import { loggerMiddleware } from "./middlewares/logger.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use(productRoutes);

app.use(errorMiddleware);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});