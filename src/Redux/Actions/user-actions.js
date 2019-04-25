const signUpAction = ( user ) => {
    return {
      type: 'SIGN_UP',
      payload: user
    }
}

const signInAction = ( user ) => {
    return {
        type: 'SIGN_IN',
        payload: user
    }
}

export {
    signUpAction,
    signInAction
}