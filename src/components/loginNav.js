import React from 'react';
import { Nav, Navbar, FormControl, Button, Form,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import avatar from '../../src/assets/images/user.png';
import CartButton from './cartButton';


class LoginNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      handleSignOut = () => {
        localStorage.removeItem('Token')
        this.setState(prevState => ({
          modal: !prevState.modal
        })) 
      }

  render() {

    const localUser = localStorage.getItem('User')
    const loggedinUser = JSON.parse( localUser )
    return (
      <div>
        <Navbar collapseOnSelect bg="light" expand="lg">
        <Link to='/'><Navbar.Brand>Clothing Shope</Navbar.Brand></Link>        
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
           <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-secondary"><i className="fas fa-search"></i></Button>
            </Form>
                      <Nav className="ml-auto" >

            <span style={{marginRight: 370}}>
            <Nav.Link> <Link to='/cart'>
                <Button variant="outline-secondary" style={{height: 55, width: 50}}>
                <CartButton />
              </Button>
              </Link>
              </Nav.Link>
              </span>

            <Navbar.Brand><Button variant="light" onClick={this.toggle} >
          <img src={ avatar }
          alt=''
           style={{ verticalAlign: 'middle',
           width: '35px',
           height: '35px',
            borderRadius: 50
            }} 
          />
         <span> {loggedinUser.fname}{' '}{ loggedinUser.lname }</span>
          </Button>
          </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <ModalHeader> <span style={{marginLeft: 200}}>
          <img src= {avatar} alt="Avatar" 
          style={{ verticalAlign: 'middle',
                    width: '70px',
                    height: '70px',
                     borderRadius: 50
                     }} 
                     />
                     </span></ModalHeader>
          <ModalBody>
            <div>
            <span style={{marginLeft: 180}}><strong>{loggedinUser.fname}{' '} { loggedinUser.lname }</strong></span></div>
            <div>
            <span style={{marginLeft: 160}}><em>{loggedinUser.email}</em></span>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={ this.handleSignOut } style={{marginRight: 200}}>Sign Out</Button>{' '}
          </ModalFooter>
        </Modal>
        {<br />}
      </div>
    );
  }
}
export default LoginNavigation;