// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { getElement, formatPrice } from '../utils.js';
import {store} from '../store.js'
import firstProd from '../dataAboutSingleProd/first.prod.js';
import secondProd from '../dataAboutSingleProd/secondProd.js';
import thirdProd from '../dataAboutSingleProd/thirdProd.js';
import fourProd from '../dataAboutSingleProd/fourProd.js';
import fiveProd from '../dataAboutSingleProd/fiveProd.js';
import sixProd from '../dataAboutSingleProd/sixProd.js';
import sevenProd from '../dataAboutSingleProd/sevenProd.js';


// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');
const singleProd = getElement('.single-product')



const urlId = window.location.search
 let productId;



const singleProdFunct = (obj) => {
  const single = obj.map((item) => {
      const {id, name, price, img, category, topping} = item
        productId = id
        document.title = `${name.toUpperCase()}`
        imgDOM.src = img
        titleDOM.textContent = name
        companyDOM.textContent = `${category}`
        priceDOM.textContent = formatPrice(price)
        descDOM.textContent = topping
        return productId
  })
}



window.addEventListener('DOMContentLoaded', async function() {

    loading.style.display = 'none'


if (urlId === '?id=1') {
  singleProdFunct(firstProd)
} else if (urlId === '?id=2') {
  singleProdFunct(secondProd)
} else if(urlId === '?id=3') {
  singleProdFunct(thirdProd)
} else if(urlId === '?id=4') {
  singleProdFunct(fourProd)
} else if(urlId === '?id=5') {
  singleProdFunct(fiveProd)
} else if(urlId === '?id=6') {
  singleProdFunct(sixProd)
} else {
  singleProdFunct(sevenProd)
}
})
 

cartBtn.addEventListener('click', function() {
 
  addToCart(productId)
})


 