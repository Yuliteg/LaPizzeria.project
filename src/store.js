import {getStorageItem, setStorageItem} from './utils.js'
import img from './dataImg.js'
import morePizzaData from './morePizzaData.js'

let store = getStorageItem('store');


const setupStore = (products, images) => {

   store = products.map((product) => {

    const {id, category, name, topping, price} = product;

    
    let test = {id, category, name, topping, price};
    test.img = images[product.id -1].img;


    if(test.id === 5) {
      test.category = 'Drink'
    }



    if(test.id === 4) {
      test.category = 'Drink'
    }



    if(test.id === 6) {
      test.price = 66;
      test.name = 'Caesar Salad'
      test.category = 'Salad'
    }

    if(test.id === 7) {
      test.price = 56;
      test.name = 'Healthy green salad'
      test.category = 'Salad'
    }




    return test;
   });

   setStorageItem('store', store)
};




const findProduct = (id) => {
  let product = store.find((product) => product.id === parseInt(id))

   return product
}


export {store, setupStore, findProduct}