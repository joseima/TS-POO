"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMemoryService = void 0;
const faker_1 = require("@faker-js/faker");
class ProductMemoryService {
    constructor() {
        this.products = [];
    }
    create(data) {
        const newProduct = Object.assign(Object.assign({}, data), { id: faker_1.faker.number.int(), category: {
                id: data.categoryId,
                name: faker_1.faker.commerce.department(),
                image: faker_1.faker.image.url()
            } });
        return this.add(newProduct);
    }
    add(product) {
        this.products.push(product);
        return product;
    }
    update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        const prevData = this.products[index];
        this.products[index] = Object.assign(Object.assign({}, prevData), changes);
        return this.products[index];
    }
    findOne(id) {
        return this.products.find(item => item.id === id);
    }
    getAll() {
        return this.products;
    }
}
exports.ProductMemoryService = ProductMemoryService;
