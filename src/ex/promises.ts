import axios from "axios";


(async ()=> {
    function delay (time: number) {
        const promise = new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
        return promise;
    }

    const rta = await delay(3000);

    function getProducts() {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products');
        return promise;
    }
    const products = await getProducts();
    console.log(products.data); //axios returns in data


    async function getProductsAsync () {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        return rta.data;
    } //this ones is the one

    


})();