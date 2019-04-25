import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import { Link } from 'react-router-dom'
import Layout from '../Layout';
import { Container, Row, Col } from 'reactstrap';
import { Nav, Navbar, Button } from 'react-bootstrap';
import CartButton from './../cartButton';
class FirstSlider extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  render() {
    console.log('first slider')
    const { index, direction } = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Nav className="mr-auto header header-bar grad" >
                <div className="categories">
                  <div className="category1">
                    <div className="icon1"><i className="fas  fa-male"></i></div>
                    <Link to='/collection/mens'><Navbar.Brand className="category2">mens </Navbar.Brand></Link>
                  </div>
                  <div className="category1">
                    <div className="icon1"><i className="fas fa-female"></i></div>
                    <Link to='/collection/womens'><Navbar.Brand className="category2">Womens </Navbar.Brand></Link>
                  </div>
                  <div className="category1">
                    <div className="icon1"><i className="fas fa-baby"></i></div>
                    <Link to='/collection/kids' ><Navbar.Brand className="category2">Kids</Navbar.Brand></Link>
                  </div>
                </div>
                <Link to='/cart'>
                <Button className='grad'>
                  <CartButton />
                  my cart
              </Button>
              </Link>
              </Nav>
            </Col>
          </Row>
        </Container>
        {<br />}
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          className=""
        >
          <Carousel.Item>
            <Link to='/collection/mens'>
              <img
                className="d-block slider w-100"
                src={img1}
                alt="First slide"
              /></Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to='/collection/womens'>
              <img
                className="d-block slider w-100"
                src={img2}
                alt="Second slide"
              /></Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to='/collection/kids'>
              <img
                className="d-block slider w-100"
                src={img3}
                alt="Third slide"
              /></Link>
          </Carousel.Item>
        </Carousel>
        {<br />}
        {<br />}
        <Layout />
      </div>
    );
  }
}
export default FirstSlider;