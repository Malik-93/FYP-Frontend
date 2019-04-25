import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { signUpAction } from '../../Redux/Actions/user-actions';
import { connect } from 'react-redux'

class SignUp extends React.Component {

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
    fetch('http://localhost:8000/users/signup', options )
    .then(res => res.json() )
    .then(user => this.props.dispatch ( signUpAction ( user ) ) )
    .catch(err => console.log( err ))
   }

  render() {
    console.log('Db Sign Up User', this.props.user)
    console.log('Redux is Auth', this.props.GlobState.isAuth)
    console.log('Redux isLogIn', this.props.GlobState.isLoggedIn)
    console.log('Redux isLoggout', this.props.GlobState.isLoggedOut)
    return (
      <Form>
                <FormGroup>
          <Label for="exampleEmail">First Name</Label>
          <Input type="text" name="fname" id="fname" placeholder="Enter your first name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Last Name</Label>
          <Input type="text" name="lname" id="lname" placeholder="Enter your last name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter your password here" />
        </FormGroup>
        <Button onClick={this.signUpFunc}>Sign Up</Button>
        </Form>
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