import { Router } from "express";
import { productService } from "../services/product.service";

const router = Router();

// listar
router.get("/products", (req, res) => {
    const products = productService.getAll();
    res.json(products);
});

// buscar por id

router.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    if(isNaN(id)) {
        return res.status(400).json({ message: "ID inválido"})
    }

    const product = productService.getById(id);

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
    if (typeof price !== "number" || price <= 0) {
        return res.status(400).json({ message: "Preço inválido"});
    }

    const newProduct = productService.create(name, price);

    res.status(201).json(newProduct);
});

// UPDATE PRODUTO
router.put("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    if(isNaN(id)) {
        return res.status(400).json({ message: "ID inválido"})
    }
    
    const { name, price } = req.body;

    if (!name || typeof name !== "string") {
        return res.status(400).json({ message: "Nome inválido" });
    }

    if (typeof price !== "number" || price <= 0) {
        return res.status(400).json({ message: "Preço inválido" });
    }

    const updatedProduct = productService.update(id, name, price);

    if (!updatedProduct) {
        return res.status(404).json({ message: "Produto não encontrado" })
    }

    res.json(updatedProduct);
});

// DELETAR PRODUTO
router.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    if(isNaN(id)) {
        return res.status(400).json({ message: "ID inválido"})
    }

    const deleted = productService.delete(id);

    if (!deleted) {
        return res.status(404).json({ message: "Produto não localizado" })
    }

    res.status(204).send();
});

export default router;