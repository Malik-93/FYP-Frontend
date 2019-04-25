import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ( { component: Component, ...rest }) => {
    let token = localStorage.getItem('Token')
    let check = token !== null ? true : alert('You Need to Login first')
    return (
       <div>
               <Route {...rest} render={( props ) => (
               check ? <Component {...props} /> : <Redirect to='/login' />
                )} />
       </div> 
    )
}

export default ProtectedRoute 
  




