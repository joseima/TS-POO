import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();


productService.create ({
    title: 'Product01',
    price: 100,
    description: 'bla bla bla',
    categoryId: 12,
    images: []
});

console.log(productService.getAll());
