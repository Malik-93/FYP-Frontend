import React, { Component } from 'react';
import { getAllProduct } from '../Redux/Actions/action';
import { connect } from 'react-redux';
import Product from './Product';
import MensCollection from '../components/Collections/Mens-collection';
import WomensCollection from '../components/Collections/Womens-collection';
import KidsCollection from '../components/Collections/Kids-collection';

class ProductList extends Component {
  state = {
    products: [],
  }

componentDidMount() {
  fetch("http://localhost:8000/allProducts")
  .then(res => res.json() )
  .then(products => {
      this.props.dispatch( getAllProduct(products) )
  })
  .catch(err => console.log(err))
}  

render() {
    return (
      <div>
    <hr />
    <hr />
   <div>
      <div className="py-5">
        <div className="container my-card">

          <div className="row" />
           {
            this.state.products.map(items => {
              return <Product key = {items._id} products = {items} handleClick={ this.addItemToCart } />
            })
          } 
         </div> 
       </div> 
 <div className="plist-men">
  <MensCollection />
 </div>
 
  <div className="plist-men">

  <WomensCollection />
 </div>
  <div className="plist-men">

 <KidsCollection />
    </div>
    </div>
        
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.reducer.allProducts
  }
}

export default connect(mapStateToProps)(ProductList)
