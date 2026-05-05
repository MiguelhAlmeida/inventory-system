type Product = {
    id: number;
    name: string;
    price: number;
}

let products: Product[] = [];

export const productService = {
    getAll: () => {
        return products;
    },

    getById: (id:number) => {
        return products.find(p => p.id === id);
    },

    create: (name: string, price: number) => {
        const newProduct: Product = {
            id: products.length + 1,
            name,
            price
        };

        products.push(newProduct);

        return newProduct;
    }
};