import React from 'react';
import { Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CartButton from './cartButton';
import { connect } from 'react-redux';


class Navigation extends React.Component {

  render() {
    return (
        <Navbar  collapseOnSelect bg="light" expand="lg" >
        <Link to='/'><Navbar.Brand>Clothing Shope</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
            <Button variant="outline-secondary">Search</Button>
          </Form>         
          <Nav className="ml-auto" style={{marginTop: 3}} >  
          <Nav.Link><Link to='/signup'> <Navbar.Brand><i className="fas fa-user-plus">Sign Up</i></Navbar.Brand> </Link></Nav.Link>
          <Nav.Link>  <Link to='/login'>  <Navbar.Brand><i className="fas fa-user-check">Sign In</i></Navbar.Brand></Link></Nav.Link> 
                <Link to='/cart'>
                <Button variant="outline-secondary">
                <CartButton />
              </Button>
              </Link>
            
            </Nav>
            <Form inline>
            </Form>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      cart: state.cartReducer
  }
}

export default connect(mapStateToProps) (Navigation);