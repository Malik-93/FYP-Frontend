import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { signInAction } from '../../Redux/Actions/user-actions';
import { connect } from 'react-redux';

class LogIn extends React.Component {
  state = {
    token: undefined,
    user: undefined
  }

  signInFun = () => {
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   const newUser = { email, password }
   var options = {
     method: 'POST',
     body: JSON.stringify( newUser ),
     headers: {
       'Content-Type' : 'application/json'
     },
   }
   fetch('http://localhost:8000/users/login', options )
   .then(res => res.json() )
   .then( response => this.setState({
     token: response.data,
     user: response.user
   }) 
)
.then(() => localStorage.setItem ('Token', this.state.token) )
.then(() => localStorage.setItem ('User', this.state.user) )
.then(() => this.props.history.push('/cart'))
   .catch(err => console.log( err ))
  }

  
  render() {
    console.log( 'State token', this.state.toke)
    console.log( 'State User', this.state.user)
    return (
      <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="email" ref='email' onChange={ this.onChangeFunc } placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" ref='password' placeholder="Enter your password" />
        </FormGroup>
        </Form>
        <Button onClick={this.signInFun}>Log In</Button>
        {/* {this.state.isAuth ? this.props.history.push(`/cart/${this.state.user}`) : '' } */}
        </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    GlobState: state.usersReducer,
    signInUser: state.usersReducer.signInUser,
    signInUserToken: state.usersReducer.signInUserToken,

  }
}

export default connect ( mapStateToProps )( LogIn )