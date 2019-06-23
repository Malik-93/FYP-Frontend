import React from 'react'
import { Route } from 'react-router-dom';
import ProtectedAuth from './protectedAuth';

const ProtectedRoute = ( { component: Component, ...rest }) => {
    let token = localStorage.getItem('Token')
    let check = token !== null ? true : ''
    return (
       <div>
               <Route {...rest} render={( props ) => (
               check ? <Component {...props} /> : <ProtectedAuth />
                )} />
       </div> 
    )
}

export default ProtectedRoute 
  




