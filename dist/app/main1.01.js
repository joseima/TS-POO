"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_memory_service_1 = require("./services/product-memory.service");
const productService = new product_memory_service_1.ProductMemoryService();
productService.create({
    title: 'Product01',
    price: 100,
    description: 'bla bla bla',
    categoryId: 12,
    images: []
});
console.log(productService.getAll());
