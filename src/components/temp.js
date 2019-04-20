import React, { Component } from 'react'

export default class Temp extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
  componentDidMount() {
    fetch('http://localhost:3500/products/getItem')
            .then(res => res.json() )
            .then(items => {
                console.log( items.data )
                this.setState({ products: items.data }) 
            })
            .catch(err => console.log(err) )
  }  
    render() {
        console.log('State Products*/*/', this.state.products)
    return (
      <div>
        <h1> Hello from temp component </h1>
        <div>
            {
                this.state.products.map((p, index) => {
                    return (
                        <div key={index}>
                           { p.title}
                        <img src={ p.productImage } alt='Product' />
                    </div>
                    )

                })
            }
        </div>
      </div>
    )
  }
}
