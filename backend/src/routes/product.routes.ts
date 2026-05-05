import { Router } from "express";

const router = Router();

type Product = {
    id: number;
    name: string;
    price: number;
};

// "banco" em memória
let products: Product[] = [];

// listar
router.get("/products", (req, res) => {
    res.json(products)
});

// buscar por id

router.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" });
    }

    res.json(product);
});

// CRIAR PRODUTO
router.post("/products", (req, res) => {
    const { name, price } = req.body;

    // validação
    if (!name || typeof name !== "string") {
        return res.status(400).json({ message: "Nome inválido"});
    }

    // validação
    if (typeof price !== "number") {
        return res.status(400).json({ message: "Preço inválido"});
    }

    const newProduct: Product = {
        id: products.length + 1,
        name,
        price
    }

    products.push(newProduct);

    res.status(201).json(newProduct);
});

export default router;