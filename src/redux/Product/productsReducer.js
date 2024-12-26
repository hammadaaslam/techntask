import { INCREMENT,DECREMENT,ADD_CART, REMOVE_CART } from "./productsType";


const initialState = {
    cart: [],
  };
  
  const CartReducar = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CART:
        const existingProductIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingProductIndex !== -1) {
          // If the product already exists in the cart, update its quantity
          const updatedCart = [...state.cart];
          updatedCart[existingProductIndex].quantity += action.payload.quantity;
  
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          // If the product is not in the cart, add it
          return {
            ...state,
            cart: [...state.cart, action.payload],
          };
        }

        case REMOVE_CART :

       
          const updatedCart = state.cart.filter((item) => item.id !== action.payload);
    
          return {
            ...state,
            cart: updatedCart,
          };




      case INCREMENT:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      case DECREMENT:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default CartReducar;