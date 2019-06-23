import React from 'react';
import { Link } from 'react-router-dom'
export default class ProtectedAuth extends React.Component {    
    
    render() {
      return (
        <div className="alert alert-warning">
       <strong><h4>You Need To Login first to visit this page</h4></strong> <Link to='/login'><span>Sign In </span></Link>
       </div>
      )
  }
}
    
