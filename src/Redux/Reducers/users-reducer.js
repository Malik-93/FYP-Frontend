const initialState = {
    signUpUsers: [],
    // signInUserToken: '',
    // signInUser: {},
    signInUserToken: '',
    isAuth: false,
    isLoggedIn: false,
    isLoggedOut: false,
}
const usersReducer = ( state = initialState, action ) => {
    
    switch ( action.type)  {
        case 'SIGN_UP':
            return  { ...state, signUpUsers: action.payload }

            case 'SIGN_IN':
            return { isAuth: true, isLoggedIn: true, isLoggedOut: false, signInUserToken: action.payload }
    
        default:
        return state
    }
}

export default usersReducer