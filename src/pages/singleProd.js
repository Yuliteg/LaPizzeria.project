// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { getElement, formatPrice } from '../utils.js';
import { store } from '../store.js'
import { allProductsUrl } from '../utils.js';

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

window.addEventListener('DOMContentLoaded', async function () {

  loading.style.display = 'none'

  try {
    const response = await fetch(`${allProductsUrl}${urlId}`)
    console.log(response);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
      const single = product.map((prod) => {
        const { id, name, company, category, prices, topping, img } = prod;

        productId = id
        document.title = `${name.toUpperCase()}`
        imgDOM.src = img
        titleDOM.textContent = name
        companyDOM.textContent = `${category}`
        priceDOM.textContent = formatPrice(prices)
        descDOM.textContent = topping
      })
    }
  } catch (error) {
    console.log(console.log(error));
    centerDOM.innerHTML = `
      <div>
        <h3 class="error">Something went wrong!</h3>
        <a href="index.html" class="btn">Home</a>
      </div>
      `
  }
})


cartBtn.addEventListener('click', function () {
  addToCart(productId)
})


