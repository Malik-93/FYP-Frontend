import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMensProduct, addToCart } from '../../../src/Redux/Actions/action';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from './images/mens/men.jpg';
import img2 from './images/mens/men-2.jpg';
import img3 from './images/mens/men-3.jpg';
import img4 from './images/mens/men-4.jpg';
import img5 from './images/mens/men-5.jpg';
import { Button } from 'react-mdl';
class MensCollection extends Component {
  constructor(props){
    super(props);
    this.state = {
      local: {},
      cart: {
        name: [],
        inCart: false
      },
    }
  }
 
  componentDidMount = () => {
    fetch('http://localhost:8000/getDbmens')
      .then((res) => res.json())
      .then((product) => {
        console.log(product.data )
        this.props.getMens(product.data)
        localStorage.setItem('Mens-Collection', JSON.stringify(product.data) )
      })
      .then( item  => {
        item =  localStorage.getItem('Mens-Collection' ) 
      })
      .then(() => {
        localStorage.setItem('Cart', [] )
      }) 
      .catch((error) => console.log(error))
  }

  handleLocalStorage = () => {
if ( !localStorage ) {
  console.log('Your local storage is empty')
}
else {
 var obj = localStorage.getItem('Mens-Collection');
 this.setState({
   local: obj
 })
 console.log('By pressing Button',  obj )
}
  }

  render() {
    console.log('Check', this.state.cart.name)
    return (
    <div>
   <h3>Mens Collection</h3>
   <div className="my-container">
          {
            this.props.products.map((product) => {
              return (
                <div key={Math.random()}>
                  <Card style={{ width: '18rem' }}>
              <Link to={'/details/'+ product._id}>
              <Card.Img variant="top" 
                   src={product.price === 500 ? img :
                   product.price === 600 ? img2:
                   product.price === 700 ? img3:
                   product.price === 800 ? img4:
                   product.price === 900 ? img5:
                   ''} /></Link>
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
                  <Button primary raised onClick = {() => {
                    this.props.addToCart( product )
                    alert('Item Added to your cart')
                  } } > Add To Cart</Button>                  
                        </Card.Body>
                    <Card.Footer>
                     <p className="text-muted">Last Update: <span>{new Date().toLocaleTimeString()}</span></p>
                  </Card.Footer>

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
const mapStateToProps = (state) => {
  return {
    products: state.reducer.mensProducts,
    fullState : state.reducer,
    cartProduct: state.cartReducer    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMens: (product) => dispatch(getMensProduct(product)),
    addToCart: (product) => dispatch(addToCart ( product ))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MensCollection)
