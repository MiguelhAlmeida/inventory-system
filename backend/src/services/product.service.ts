import { Product } from "../types/product.type";

let products: Product[] = [];

export const productService = {
    getAll(): Product[] {
        return products;
    },

    getById(id: number): Product | undefined {
        return products.find(p => p.id === id);
    },

    create(name: string, price: number): Product {
        const newProduct: Product = {
            id: products.length + 1,
            name,
            price
        };

        products.push(newProduct);

        return newProduct;
    },

    update(id: number, name: string, price: number): Product | null {
        const product = products.find(p => p.id === id);

        if (!product) {
            return null;
        }

        product.name = name;
        product.price = price;

        return product;
    },

    delete(id: number): boolean {
        const index = products.findIndex(p => p.id === id);

        if (index === -1) {
            return false;
        }

        products.splice(index, 1);
        
        return true;
    }
};