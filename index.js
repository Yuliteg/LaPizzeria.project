import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store, findProduct } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';


const init = async () => {
    const products = await fetchProducts();
     if(products) {
         setupStore(products)
          const featured = store.filter((product) => product.id < 4);
          display(featured,getElement('.featured-center'))
     }
}



window.addEventListener('DOMContentLoaded', init)