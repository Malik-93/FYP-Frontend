import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Admin extends React.Component {
  state = {
    selectedFile : null
  }

  fileSelected = event => {
  console.log (event.target.files[0])
     
  this.setState({
    selectedFile :event.target.files[0]
  })
  }

  uploadFile = () => {
    const fd = new FormData();
    let file = this.state.selectedFile
    let filename = this.state.selectedFile.name
    fd.append('image', file);
    fd.append('photo', filename);
    
    axios.post('/upload', fd )
    .then(function(res){
    console.log(res);
  }).catch(function (error) {
   
    console.log(error);
});
}
  
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title"  />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="number" name="price" id="price" />
        </FormGroup>
        <FormGroup>
          <Label for="company">Company</Label>
          <Input type="text" name="company" id="company" />
        </FormGroup>
        <FormGroup>
          <Label for="info">Info</Label>
          <Input type="textarea" name="info" id="info" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="file" />
        </FormGroup>
        <Button onClick={this.addProduct}>Add Product</Button>
      </Form>
    );
  }
        // addProduct = () => {
        //   const newProduct = {
        //       title: document.getElementById('title').value,
        //       price: document.getElementById('price').value,
        //       company: document.getElementById('company').value,
        //       info: document.getElementById('info').value,
        //   }
        //     var options = {
        //         method: 'POST',
        //         body: JSON.stringify(newProduct ),
        //         headers: { 'Content-Type': 'application/json'}
        //     }
        //     fetch('http://localhost:8000/addProduct', options)
        //         .then((res) => res.text())
        //         .then((product) => {
        //           console.log(product)
        //           this.props.addToDb(product)
        //         })
        //         .catch((error) => console.log(error))
        // }
}