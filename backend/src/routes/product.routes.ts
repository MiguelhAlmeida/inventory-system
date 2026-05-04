import { Router } from "express";
import { json } from "node:stream/consumers";

const router = Router();

// listar produtps
router.get("/products", (req, res) => {
    res.json([
        {id: 1, name: "Teclado", price: 150},
        {id: 2, name: "Mouse", price: 80}
    ]);
});

router.get("/products/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        id,
        name: "Produto teste",
        price: 999
    });
});

export default router;