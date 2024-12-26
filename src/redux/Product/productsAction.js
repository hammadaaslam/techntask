import { INCREMENT,DECREMENT,ADD_CART,REMOVE_CART } from "./productsType";


export const increment = (productId) => ({
    type: INCREMENT,
    payload: productId,
  });
  
  export const decrement = (productId) => ({
    type: DECREMENT,
    payload: productId,
  });
  
  export const addcart = (product) => ({
    type: ADD_CART,
    payload: product,
  });


  export const removecart = (productId) => ({

    type : REMOVE_CART,
    payload:productId
  })