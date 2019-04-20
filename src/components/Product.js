import React, {Component} from 'react';
import {Card,Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import img from './Collections/images/men.jpg'
class Product extends Component{
  render(){
    const { title, price} = this.props.products
    return(
      <div>
        <div className='my-container'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title><b>Title:</b> {title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem><span><b>Price:</b></span> $ {price}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Button variant="outline-success" >
                      <i className='fas fa-cart-plus' />
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                     <p className="text-muted">Last Update: <span>{new Date().toLocaleTimeString()}</span></p>
                  </Card.Footer>
                  </Card>
        </div>
      </div>
    )
  }
}
export default Product;
