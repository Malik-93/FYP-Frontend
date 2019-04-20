import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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

  // async fetchImage () {
  //   try{
  //     const res = await fetch(`http://localhost:8000/image/a7e63176b105a4699e2df04e94fd38bd.jpeg`)
  //     console.log('2nd image****/', res)
  //     this.setState({
  //       pictures: res
  //     })
  //   } catch (e) {
  //    console.log('Error', e)
  //   } 
  //     }


  render() {
    return (
      <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src='dummy' className="img-fluid" alt='product' />
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
              <button>back to products</button>
            </Link>
            <button>
             add to cart
            </button>
          </div>
        </div>
      </div>
    </div>

      )
  }
}
export default Details