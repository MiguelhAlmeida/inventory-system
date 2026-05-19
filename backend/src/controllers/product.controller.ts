import { Request, Response } from "express";
import { productService } from "../services/product.service";

export const productController = {
    
    getAll: (req: Request, res: Response) => {
        const products = productService.getAll();
        return res.json(products);
    },

    getById: (req: Request, res: Response) => {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }

        const product = productService.getById(id)

        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }

        return res.json(product);
    },

    create: (req: Request, res: Response) => {
        const { name, price } = req.body;

        if (!name || typeof name !== "string") {
            return res.status(400).json({ message: "Nome inválido" })
        }

        if (typeof price !== "number" || price <= 0) {
            return res.status(400).json({ message: "Preço inválido" })
        }

        const newProduct = productService.create(name, price);

        return res.status(201).json(newProduct);
    },

    update: (req: Request, res: Response) => {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" });
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
            return res.status(404).json({ message: "Produto não encontrado" });
        }

        return res.json(updatedProduct);
    },

    delete: (req: Request, res: Response) => {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }

        const deleted = productService.delete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Produto não encontrado" })
        }

        return res.status(204).send();
    }
};