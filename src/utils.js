
const allProductsUrl = 'https://private-anon-f3881b6eb6-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=ranks'


const getElement = (selection) => {
    const element = document.querySelector(selection)
    if (element) return element
    throw new Error(`Please check "${selection}" selector, no such element exist`)
  }

  const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: "USD",
    }).format((price / 10).toFixed(2));
    return formattedPrice
  }

  const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item)
      if(storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item))
      } else {
        storageItem = [];
      }
      return storageItem;
  }

  const setStorageItem = (name, item) => {
      localStorage.setItem(name, JSON.stringify(item))
  }


  export {getElement, allProductsUrl, formatPrice, getStorageItem, setStorageItem}

