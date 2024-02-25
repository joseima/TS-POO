"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_http_service_1 = require("./services/product-http.service");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const productService = new product_http_service_1.ProductHttpService();
    try {
        console.log('--'.repeat(10));
        console.log('getAll');
        const products = yield productService.getAll();
        console.log(products.length);
        console.log(products.map(item => item.price));
        const productId = products[0].id;
        console.log('--'.repeat(10));
        console.log('update');
        yield productService.update(productId, {
            price: 10000,
            title: 'new title',
            description: 'new description'
        });
        console.log('--'.repeat(10));
        console.log('findOne');
        const product = yield productService.findOne(productId);
        console.log(product);
    }
    catch (error) {
        console.error(error);
    }
}))();
