import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getKidsProduct, addToCart } from '../../../src/Redux/Actions/action';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import img1 from './images/kids/kids.jpg';
import img2 from './images/kids/kid-2.jpg';
import img3 from './images/kids/kid-3.jpg';
import img4 from './images/kids/kid-4.jpg';
import img5 from './images/kids/kid-5.jpg';

import { Button } from 'react-mdl';
class KidsCollection extends Component {
  
  state = {
    products: []
  }
  
  componentDidMount = () => {
    fetch('http://localhost:8000/kids')
 .then((res) => res.json())
 .then((product) => {
 console.log(" DB Kids Product ", product)
  this.props.dispatch(getKidsProduct (product) )
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
    console.log('Kids Collection Render',this.props.products )
    return (
      <div>
        <h3>Kids Collection</h3>        
        <div className='my-container'>
        {
          this.state.products.map((product) => {
            return (
              <div key={Math.random()}>
                {/* <span>ID: {product._id}</span> */}
                  <Card style={{ width: '18rem' }}>
                  <Link to={'/details/'+product._id}><Card.Img variant="top" 
                  src={product.price === 400 ? img1 :
                    product.price === 500 ? img2:
                    product.price === 600 ? img3:
                    product.price === 700 ? img4:
                    product.price === 800 ? img5:
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
                      <Button primary raised 
                      onClick = { () =>  { 
                        this.props.dispatch (addToCart ( product ))
                        alert('Item Added to your cart') 
                      } }  >Add to Cart</Button> 
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
    products: state.reducer.kidsProducts 
  }
}

export default connect(mapStateToProps)(KidsCollection)