import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWomensProduct } from '../../Redux/Actions/product-actions';
import { addToCart } from '../../Redux/Actions/cart-actions';

import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import img1 from './images/womens/womens.jpg';
import img2 from './images/womens/women-2.jpg';
import img3 from './images/womens/women-3.jpeg';
import img4 from './images/womens/women-4.jpg';
import img5 from './images/womens/women-5.jpg';
import { Button } from 'react-mdl';

class WomensCollection extends Component {
  
  state = {
    products: []
  }

  componentDidMount = () => {
  fetch('/womens')
 .then((res) => res.json())
 .then((product) => {
  this.props.dispatch(getWomensProduct (product) )
})
.catch((error) => console.log(error))
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      products: nextProps.products.data
    })
  }

  render() {
    return (
      <div>
        <div className='my-container'>
        {
          this.state.products.map((product) => {
            return (
              <div key={Math.random()}>
                  <Card style={{ width: '18rem' }} >
                  <Link to={'/details/'+product._id}><Card.Img variant="top" 
                   src={product.price === 500 ? img1 :
                    product.price === 600 ? img2:
                    product.price === 700 ? img3:
                    product.price === 800 ? img4:
                    product.price === 900 ? img5:
                    ''} />
                  </Link>                    
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
                      <div>                
                      <Button primary
                       raised 
                       onClick ={ () => { 
                         this.props.dispatch ( addToCart ( product ))
                         alert('Item Added to your cart') 
                      }}>Add To Cart
                       </Button>
                      </div> 
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
