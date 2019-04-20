import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMensProduct } from '../../../src/Redux/Actions/action';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from './images/men.jpg'
class MensCollection extends Component {
  constructor(props){
    super(props);
    this.state = {
      local: {}
    }
  }
 
  componentDidMount = () => {
    fetch('http://localhost:8000/getDbmens')
      .then((res) => res.json())
      .then((product) => {
        console.log(product.data )
        this.props.getMens(product.data)
        localStorage.setItem('Mens-Collection', product.data )
      })
      .then( item  => {
        item =  localStorage.getItem('Mens-Collection' ) 
        console.log('Data From LocalStorage', item)
      })
      // .then(() => {
      //   localStorage.removeItem('Mens-Collection')
      //   console.log('Data removed Successfully')
      // }) 
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
//@Single image


  // @All Images

  // async fetchImage () {
  //   try{
  //     const res = await fetch(`http://localhost:8000/image/2168bc7a67772bc91fe421dca8580dc4.jpg`)
  //     console.log('2nd image****/', res)
  //     this.setState({
  //       pictures: [res, ...this.state.pictures]
  //     })
  //   } catch (e) {
  //    console.log('Error', e)
  //   } 
  //     }
    
  render() {
    console.log("My State", this.state.local)
    return (
    <div>
      <button onClick={this.handleLocalStorage}>Fetch from LocalStorage</button>
   <h1>Mens Collection</h1>
   {/* <h3 id='local'>Data from localStorage:{this.state.local}</h3>     */}
   <div className="my-container">
          {
            this.props.products.map((product) => {
              return (
                <div key={Math.random()}>
                  <Card style={{ width: '18rem' }} className="my-card">
              <Link to={'/details/'+ product._id}><Card.Img className="card-img" variant="top" src={img} /></Link>
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
                  <Link to={'/details/'+ product._id }><button>Go to details</button> </Link>                
                    <button>Add To Cart</button>                  
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
    products: state.reducer.mensProducts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMens: (product) => dispatch(getMensProduct(product)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MensCollection)
