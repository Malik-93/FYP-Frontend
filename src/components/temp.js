import React from 'react';
import { connect } from 'react-redux';

export default function ( ComposedComponent ) {
  class Temp extends React.Component {
    componentDidMount ()  {
     const token = localStorage.getItem('Token')
     if( token === null ) {
       this.props.history.push('/login')
     }
     this.props.history.push( '/cart' )
     }
    
    
    render() {
      console.log( this.props.userAuth )
      return (
        <ComposedComponent { ...this.props } />    
      )
    }
  
  }

  const mapStateToProps = (state) => {
    return {
      userAuth: state.usersReducer.isAuth
    }

  }

  return connect (mapStateToProps) ( Temp )

}
    
