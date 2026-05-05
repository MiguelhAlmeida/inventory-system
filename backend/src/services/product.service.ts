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
    },

    update: (id: number, name: string, price: number) => {
        const product = products.find(p => p.id === id);

        if (!product) return null;

        product.name = name;
        product.price = price;

        return product;
    },

    delete: (id: number) => {
        const index = products.findIndex(p => p.id === id);

        if (index === -1) return false;

        products.splice(index, 1);
        
        return true;
    }
};