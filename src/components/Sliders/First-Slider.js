import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import { Link } from 'react-router-dom'
import Layout from '../Layout';
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
    const { index, direction } = this.state;
    return (
      <div>
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
        <Layout />
      </div>
    );
  }
}
export default FirstSlider;