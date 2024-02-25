import axios from "axios";
import {Product} from './models/product.model';

(async ()=> {
    async function getProductsAsync () {
        const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        return data;
    } //this ones is the one
    
    const products = await getProductsAsync();
    console.log(products.map(item => `${item.id} - ${item.title}`)); 


})();