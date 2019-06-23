const addToCart = ( product ) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

const removeItemFromCart = ( product ) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product
    }
} 
const sameProduct = ( product ) => {
    return {
        type: 'SAME_PRODUCT',
        payload: product
    }
}

const prevReducerState = ( product ) => {
    return {
        type: 'PREV_STATE',
        payload: product
    }
}

export {
    addToCart,
    removeItemFromCart,
    sameProduct,
    prevReducerState
}