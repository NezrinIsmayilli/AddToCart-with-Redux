export const addToCart = book => {
    return{
        type:"ADD_TO_CART", payload: book
    }
}

export const deleteFromCart = book =>{
    return{
        type: "DELETE_FROM_CART", payload: book
    }
}

export const decrement = id => {
    return{
        type: "DECREMENT", payload: id
    }
}

export const cleanTheCart =()=>{
    return{
        type: "CLEAN_THE_CART"
    }
}