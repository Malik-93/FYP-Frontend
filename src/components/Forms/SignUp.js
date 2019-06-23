import React from 'react';
import { signUpAction } from '../../Redux/Actions/user-actions';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  state = {
    message: '',
    divShow: false,
  }
  
  onChangeHandle = (e) => {
    this.setState({ val: e.target.value })
  }

  signUpFunc = () => {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const newUser = { fname, lname, email, password }
    var options = {
      method: 'POST',
      body: JSON.stringify( newUser ),
      headers: {
        'Content-Type' : 'application/json'
      },
    }
    fetch('/users/signup', options )
    .then(res => res.json() )
    .then( (data) => { 
      this.props.dispatch ( signUpAction ( data ) )
      this.setState({
        divShow: true,  
        message: data.message          
    }) 
    })
    .catch(err => console.log( err ))
   }

  render() {
    console.log('Existing user', this.state.val)
    return (
      <div>
       { this.state.divShow === true && this.state.message === 'Email is already in use' ? 
       <div className="alert alert-info">
       <strong>{ this.state.message }</strong>
       </div>
       
       : this.state.divShow === true && this.state.message === 'Welcome! You are successfully sign Up' ? 
       <div className="alert alert-success">
       <strong>{ this.state.message }</strong>
       </div>
       :  '' }

        <Form>
        <FormGroup>
          <Label for="fname">First Name</Label>
          <Input type="text" name="fname" id="fname" placeholder="First Name" />
        </FormGroup>
        <FormGroup>
          <Label for="lname">Last Name</Label>
          <Input type="text" name="lname" id="lname" placeholder="Last Name" />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter your password here" />
        </FormGroup>
        <Button onClick = { this.signUpFunc }>Sign Up</Button>
        </Form>
</div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    GlobState: state.usersReducer,
    user : state.usersReducer.signUpUsers,
  }
}

export default connect( mapStateToProps )( SignUp )