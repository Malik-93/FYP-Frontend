import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWomensProduct } from '../../../src/Redux/Actions/action';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import img from './images/womens.jpg';

class WomensCollection extends Component {
  
  state = {
    products: []
  }

  componentDidMount = () => {
  fetch('http://localhost:8000/womens')
 .then((res) => res.json())
 .then((product) => {
 console.log(" DB Womens Product ", product)
  this.props.dispatch(getWomensProduct (product) )
})
.catch((error) => console.log(error))
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('nextProps', nextProps.products)
    this.setState({
      products: nextProps.products.data
    })
  }

  render() {
    console.log('WomensMens Collection Render',this.state.products )
    return (
      <div>
        <h1>Womens Collection</h1>
        <div className='my-container'>
        {
          this.state.products.map((product) => {
            return (
              <div key={Math.random()}>
              {/* <span>ID: {product._id}</span> */}
                  <Card style={{ width: '18rem' }} className="my-card">
                  <Link to={'/details/'+product._id}><Card.Img className="card-img" variant="top" src={img} /></Link>                    
                    <Card.Body>
                      <Card.Title><b>Title:</b> {product.title}</Card.Title>
                      <Card.Text>
                        {product.info}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem><b>Company:</b> {product.company}</ListGroupItem>
                      <ListGroupItem><span><b>Price:</b></span> $ {product.price}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                  <Link to={'/details/'+ product._id }><button>Go to details</button> </Link>                
                      <Link to="/cart"><button>Add to Cart</button> </Link>
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
    products: state.reducer.womensProducts 
  }
}

export default connect(mapStateToProps)(WomensCollection)

// {console.log("womens check", product)}
//               <li>ID: {product._id}</li>
//               <li >Title: {product.title}</li>
//               <li >Price: {product.price}</li>
//               <li >Company:{product.company}</li>
//               <li >Info: {product.info}</li>
//               <li >inCart:{console.log(product.inCart)} {product.inCart}</li>
//               <li >Count: {product.count}</li>
//               <li >Total: {product.total}</li>
