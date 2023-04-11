import { toast } from "react-toastify"

// use local storage to manage job data
const addToDb = id => {
  let appliedJobs = {}

  //get the applied jobs from local storage
  const storedjobs = localStorage.getItem('applied-jobs')
  if (storedjobs) {
    appliedJobs = JSON.parse(storedjobs)
  }

  // check if already applied or not
  const timesApplied = appliedJobs[id]
  if (timesApplied) {
    toast.error("Can Not Apply Again! You Have Already applied for This Job before!!", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    appliedJobs[id] = 'applied'
    toast.success("Congratulations!! You Have Now Applied for This job!!", {
      position: toast.POSITION.TOP_CENTER
    });
  }
  localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
}

const getStoredCart = () => {
  let shoppingCart = {}

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }
  return shoppingCart
}

const removeFromDb = id => {
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart)
    if (id in shoppingCart) {
      delete shoppingCart[id]
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
  }
}

const deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart')
}

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart }
