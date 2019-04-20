import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getKidsProduct } from '../../../src/Redux/Actions/action';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import img from './images/kids.jpg';
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
        <h1>Kids Collection</h1>
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
    products: state.reducer.kidsProducts 
  }
}

export default connect(mapStateToProps)(KidsCollection)
