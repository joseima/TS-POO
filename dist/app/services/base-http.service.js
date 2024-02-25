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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseHttpService = void 0;
const axios_1 = __importDefault(require("axios"));
class BaseHttpService {
    // data: TypeClass[] = [];
    constructor(url) {
        this.url = url;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios_1.default.get(this.url);
            return data;
        });
    }
}
exports.BaseHttpService = BaseHttpService;
// const service = new BaseHttpService<string>();
// service.getAll()
// const service1 = new BaseHttpService<Category>();
// service1.getAll
(() => __awaiter(void 0, void 0, void 0, function* () {
    const url1 = 'https://api.escuelajs.co/api/v1/products';
    const productService = new BaseHttpService(url1);
    const rta = yield productService.getAll();
    console.log('products', rta.length);
    const url2 = 'https://api.escuelajs.co/api/v1/categories';
    const categoryService = new BaseHttpService(url2);
    const rta1 = yield categoryService.getAll();
    console.log('categories', rta1.length);
}))();
