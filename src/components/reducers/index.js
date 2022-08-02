import { data } from "../data/data";

const INITIAL_STATE = {
    bookList: data,
    cart: [],
    totalPrice: 0
}

export const reducer = (state = INITIAL_STATE, action) =>{

    switch(action.type){
      case 'ADD_TO_CART':
        const sameBook = state.cart.find(product => product.id === action.payload.id);
        
        if (sameBook) {
          return {
                  ...state, 
                  cart: state.cart.map(book => book.id === action.payload.id
                      ? {
                        ...book,
                        qty: book.qty + 1,
                      }
                      : book
                    ),
                    totalPrice: state.totalPrice + action.payload.price
                };
              }

          return {
                  ...state,
                  cart: [action.payload, ...state.cart],
                  totalPrice: state.totalPrice + action.payload.price
                };

        case 'DELETE_FROM_CART':
            return {
                    ...state, 
                    cart: [ ...state.cart.filter(book=> book.id !== action.payload.id)], 
                    totalPrice: state.totalPrice - action.payload.price * action.payload.qty
                  }

        case 'DECREMENT':
            return {  
                    ...state, 
                    cart: state.cart.map(book => book.id === action.payload.id
                      ? {
                          ...book,
                          qty: book.qty>1 ? book.qty - 1 : 1
                        }
                      : book
                      ),
                    totalPrice: action.payload.qty>1 ? state.totalPrice - action.payload.price : state.totalPrice
                  }
        
        case 'CLEAN_THE_CART':
                return {...INITIAL_STATE};

        default:
            return state;
    }
}