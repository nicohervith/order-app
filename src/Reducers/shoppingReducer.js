import { TYPES } from "../Actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Muzza", price: 610 },
    { id: 2, name: "Especial", price: 700 },
    { id: 3, name: "Napolitana", price: 700 },
    { id: 4, name: "Fugazzeta", price: 700 },
    { id: 5, name: "Primavera", price: 700 },
    { id: 6, name: "Calabresa", price: 700 },
    { id: 7, name: "Papas, cheddar y verdeo", price: 750 },
    { id: 8, name: "Panceta, cheddar y verdeo", price: 750 },
    { id: 9, name: "Panceta y huevo duro", price: 750 },
    { id: 10, name: "Roquefort", price: 700 },
    { id: 11, name: "Cebolla y roquefort", price: 750 },
    { id: 12, name: "Jamón y papas fritas", price: 750 },
    { id: 13, name: "Provolone y panceta", price: 750 },
    { id: 14, name: "Champiñones y cebolla", price: 750 },
    { id: 15, name: "Jamón crudo y rúcula", price: 700 },
    { id: 16, name: "Anchoas", price: 700 },
    { id: 17, name: "4 Quesos", price: 700 },
  ],
  cart: [],
};

export function shoppingReducer(state,action){

  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find((product) =>product.id === action.payload);

      let itemInCart = state.cart.find(item=> item.id === newItem.id)

       return itemInCart 
       ? {
         ...state,
         cart: state.cart.map(item => item.id === newItem.id ? {...item, quantity : item.quantity +1} : item)
       } 
       : { 
         ...state, cart: [...state.cart, {...newItem, quantity: 1}] };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload)
          };
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case TYPES.CLEAR_CART: 
      return shoppingInitialState;

    default:
      return state;
  }
}