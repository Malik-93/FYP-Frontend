
const getAllProduct = (product) => {
    return {
        type: 'GET_ALL', 
        payload: product
    }
}

const getMensProduct = (product) => {
    return {
        type: 'GET_MENS', 
        payload: product
    }
}

const getWomensProduct = (product) => {
    return {
        type: 'GET_WOMENS', 
        payload: product
    }
}

const getKidsProduct = (product) => {
    return {
        type: 'GET_KIDS', 
        payload: product
    }
}
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
     getAllProduct,
     getMensProduct,
     getWomensProduct,
     getKidsProduct,
     addToCart,
     removeItemFromCart,
     sameProduct,
     prevReducerState
    };