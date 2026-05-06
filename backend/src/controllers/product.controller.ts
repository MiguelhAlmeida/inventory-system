import { NextFunction, Request, Response } from "express";
import { productService } from "../services/product.service";
import { AppError } from "../errors/app-error";

export const productController = {
    
    getAll: (req: Request, res: Response, next: NextFunction) => {
        
        try {
            const products = productService.getAll();

            return res.json(products);

        } catch (error) {
            next(error);
        }
        
    },

    getById: (req: Request, res: Response, next: NextFunction) => {
        
        try{
            const id = Number(req.params.id);

            if (isNaN(id)) {
                throw new AppError("ID Inválido", 400);
            }

            const product = productService.getById(id)

            if (!product) {
                throw new AppError("Produto não encontrado", 404);
            }

            return res.json(product);

        } catch(error) {
            next(error);
        }
        
    },

    create: (req: Request, res: Response, next: NextFunction) => {

        try{
            const { name, price } = req.body;

            if (!name || typeof name !== "string") {
                throw new AppError("Nome inválido", 400);
            }

            if (typeof price !== "number" || price <= 0) {
                throw new AppError("Preço inválido", 400);
            }

            const newProduct = productService.create(name, price);

            return res.status(201).json(newProduct);
            
        } catch (error) {
            next(error);
        }
        
    },

    update: (req: Request, res: Response, next: NextFunction) => {

        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                throw new AppError("ID Inválido", 400);
            }

            const { name, price } = req.body;

            if (!name || typeof name !== "string") {
                throw new AppError("Nome inválido", 400);
            }

            if (typeof price !== "number" || price <= 0) {
                throw new AppError("Preço inválido", 400);
            }

            const updatedProduct = productService.update(id, name, price);

            if (!updatedProduct) {
                throw new AppError("Produto não encontrado", 404);
            }

            return res.json(updatedProduct);

        } catch (error) {
            next(error);
        }
        
    },

    delete: (req: Request, res: Response, next: NextFunction) => {

        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                throw new AppError("ID Inválido", 400);
            }

            const deleted = productService.delete(id);

            if (!deleted) {
                throw new AppError("Produto não encontrado", 404);
            }

            return res.status(204).send();
        } catch (error) {
            next(error);
        }
        
    }
};