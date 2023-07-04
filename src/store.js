import { getStorageItem, setStorageItem } from './utils.js'

let store = getStorageItem('store');

const setupStore = (products) => {
   store = products.map((product) => {

      const { id, category, name, topping, prices } = product;
      let test = { id, category, name, topping, prices };
      test.img = product.img;

      return test;
   });

   setStorageItem('store', store)
};


const findProduct = (id) => {
   let product = store.find((product) => product.id === id)
   return product
}


export { store, setupStore, findProduct }