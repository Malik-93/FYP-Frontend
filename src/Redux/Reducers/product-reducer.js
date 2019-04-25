
const initialState ={
    allProducts: [],
    mensProducts: [],
    womensProducts: [],
    kidsProducts: [],
}

const reducer = (state= initialState, action) => {

    switch (action.type) {
        case 'GET_ALL':
        return {...state, allProducts: action.payload }

        case 'GET_MENS':
        return {...state, mensProducts: action.payload }
        
        case 'GET_WOMENS':
        return {...state, womensProducts: action.payload }
        
        case 'GET_KIDS':
        return { ...state, kidsProducts: action.payload }
        
        default:
            return state;;
    }

}

const cartReducer = ( state = [], action ) => {
    switch (action.type) {
        
        case 'ADD_TO_CART':
        return [ ...state, action.payload ]

        case 'REMOVE_FROM_CART':
        return state.filter( (item) => { return item !== action.payload } )
        
        default:
        return state
    }
}

const sameProductReducer = (state = [], action) => {
    switch ( action.type ) {

         case 'PREV_STATE':
         return [ ...state, action.payload ]

         case 'SAME_PRODUCT':        
          return state.map( (i) => {
            return  i === action.payload ? alert('Same product') : [...state, action.payload]
          })
         default:
         return state
    }
}

export {
    reducer, 
    cartReducer,
    sameProductReducer 
} 