import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Button } from 'react-mdl';
import { Link } from 'react-router-dom';
import { removeItemFromCart, sameProduct, prevReducerState } from '../Redux/Actions/action';

import men1 from './Collections/images/mens/men.jpg';
import men2 from './Collections/images/mens/men-2.jpg';
import men3 from './Collections/images/mens/men-3.jpg';
import men4 from './Collections/images/mens/men-4.jpg';
import men5 from './Collections/images/mens/men-5.jpg';
import women1 from './Collections/images/womens/womens.jpg';
import women2 from './Collections/images/womens/women-2.jpg';
import women3 from './Collections/images/womens/women-3.jpeg';
import women4 from './Collections/images/womens/women-4.jpg';
import women5 from './Collections/images/womens/women-5.jpg';
import kid1 from './Collections/images/kids/kids.jpg';
import kid2 from './Collections/images/kids/kid-2.jpg';
import kid3 from './Collections/images/kids/kid-3.jpg';
import kid4 from './Collections/images/kids/kid-4.jpg';
import kid5 from './Collections/images/kids/kid-5.jpg';
var count = 0;
class Cart extends Component {
constructor (props){
  super(props);
  this.state = {
    cart: [],
    isLoading: true,
  }
}
  
componentDidMount() {
  
  this.setState({
    cart: this.props.cartProduct,
    isLoading: false
  })
  
  return this.handleSameProduct()
}

handleSameProduct = () => {
  const product = this.props.cartProduct
  this.props.dispatch( prevReducerState ( product ))
 }

handleCount = (id) => {
  const tempCart = [...this.props.cartProduct] 
  const selectedItem = tempCart.find( item => item._id === id )
  console.log( selectedItem )
  const index = tempCart.indexOf ( selectedItem )
  const product = product[ index ]
  product.price = product.price + 1
 
}
  handleSignOut = () => {
    this.setState({
      token: 'empty'
    })
    localStorage.removeItem('Token')
  }

  render() {
   console.log('Same Products', this.props.sameProduct )
    if( this.state.cart.length === 0 ) {
      return (
        <div>
          <h1>
            Your Cart is Empty
          </h1>
        </div>
      )
    }
    return (
      <div>
        <button onClick={this.handleSignOut}>SignOut</button>
        <h2>Your cart</h2>
        <div>
        <h3>Your total products:{ count } </h3>
        </div>

        <div className="my-container">
          {
            this.props.cartProduct.map((product) => {
              return (
                <div key={Math.random()}>
                  <Card style={{ width: '18rem' }}>
              <Link to={'/details/'+ product._id}>
              <Card.Img variant="top" 
          src = {
            this.state.cart.title === 'mens' && this.state.cart.price === 500 ? men1 :
            this.state.cart.title === 'mens' && this.state.cart.price === 600 ? men2 :
            this.state.cart.title === 'mens' && this.state.cart.price === 700 ? men3 :
            this.state.cart.title === 'mens' && this.state.cart.price === 800 ? men4 :
            this.state.cart.title === 'mens' && this.state.cart.price === 900 ? men5 :
            this.state.cart.title === 'womens' && this.state.cart.price === 500 ? women1 :
            this.state.cart.title === 'womens' && this.state.cart.price === 600 ? women2 :
            this.state.cart.title === 'womens' && this.state.cart.price === 700 ? women3 :
            this.state.cart.title === 'womens' && this.state.cart.price === 800 ? women4 :
            this.state.cart.title === 'womens' && this.state.cart.price === 900 ? women5 :
            this.state.cart.title === 'kids' && this.state.cart.price === 400 ? kid1 :
            this.state.cart.title === 'kids' && this.state.cart.price === 500 ? kid2 :
            this.state.cart.title === 'kids' && this.state.cart.price === 600 ? kid3 :
            this.state.cart.title === 'kids' && this.state.cart.price === 700 ? kid4 :
            this.state.cart.title === 'kids' && this.state.cart.price === 800 ? kid5
            : '' 
          } /></Link>
                    <Card.Body>
                      <Card.Title><b>Title:</b> {product.title}</Card.Title>
                      <Card.Text>
                        {product.info}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem><b>Company:</b> {product.company}</ListGroupItem>
                      <ListGroupItem><span><b>Price:</b></span> PKR {product.price}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>              
                    <Button primary raised >Check Out</Button>                  
                  <Button primary raised onClick={() => this.props.dispatch ( removeItemFromCart ( product ))} style={{marginLeft: 5}} > Remove </Button>                  
                  <Button primary raised onClick={( id ) => this.handleSameProduct( id )  }>+</Button>                  

                   
                  </Card.Body>
                  </Card>
             </div>
              )
            })
          }
        </div>

      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    cartProduct: state.cartReducer,
    sameProduct: state.sameProductReducer
  }
}

export default connect(mapStateToProps)( Cart )