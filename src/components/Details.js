import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
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

import { Button } from 'react-mdl';
import { addToCart } from '../Redux/Actions/action';
class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
     products: [],
  }
}


componentDidMount() {
  fetch('http://localhost:8000/details/' + this.props.match.params.id)
  .then(res =>  res.json() )
  .then(product => {
    this.setState({
      products: product.data 
    })
  })
  .catch(err => {
    console.log(err)
  })  
  }  

  render() {
    return (
      <div className="container py-5" style={{backgroundColorL:'grey'}}>
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img 
          src = { 
            this.state.products.title === 'mens' && this.state.products.price === 500 ? men1 :
            this.state.products.title === 'mens' && this.state.products.price === 600 ? men2 :
            this.state.products.title === 'mens' && this.state.products.price === 700 ? men3 :
            this.state.products.title === 'mens' && this.state.products.price === 800 ? men4 :
            this.state.products.title === 'mens' && this.state.products.price === 900 ? men5 :
            this.state.products.title === 'womens' && this.state.products.price === 500 ? women1 :
            this.state.products.title === 'womens' && this.state.products.price === 600 ? women2 :
            this.state.products.title === 'womens' && this.state.products.price === 700 ? women3 :
            this.state.products.title === 'womens' && this.state.products.price === 800 ? women4 :
            this.state.products.title === 'womens' && this.state.products.price === 900 ? women5 :
            this.state.products.title === 'kids' && this.state.products.price === 400 ? kid1 :
            this.state.products.title === 'kids' && this.state.products.price === 500 ? kid2 :
            this.state.products.title === 'kids' && this.state.products.price === 600 ? kid3 :
            this.state.products.title === 'kids' && this.state.products.price === 700 ? kid4 :
            this.state.products.title === 'kids' && this.state.products.price === 800 ? kid5
            : '' 
          } 
          className="img-fluid" alt='product' />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h1>Title : {this.state.products.title}</h1>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by : <span className="text-uppercase">{this.state.products.company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>$</span>
              {this.state.products.price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product : 
          </p>
          <p className="text-muted lead">{this.state.products.info}</p>
          {/* buttons */}
          <div>
            <Link to="/">
            <Button raised>Back to Products</Button>            
            </Link>
            <Button raised 
            style={{marginLeft: 10}}
            onClick={ () =>  {
               this.props.dispatch( addToCart ( this.state.products ))
               alert('Item Added successfully') 
              }
            }
            >
            Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>

      )
  }
}
export default connect() (Details)