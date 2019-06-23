import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Nav';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/404';
import { Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import FirstSlider from './components/Sliders/First-Slider';
import Model from './components/Model';
import MensCollection from './components/Collections/Mens-collection';
import WomensCollection from './components/Collections/Womens-collection';
import KidsCollection from './components/Collections/Kids-collection';
// import Admin from './components/Forms/Admin';
import LogIn from '../src/components/Forms/Login';
import SignUp from '../src/components/Forms/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import LoginNavigation from './components/loginNav';
import SiteFooter from './components/Footer';

class App extends Component {
  state = {
    cartAuth: false,
  }

  render() {
    return (
      <Provider store = { store }>
      <div >
      <React.Fragment >
        {localStorage.getItem('Token') ? <LoginNavigation /> : <Navigation /> }
         {<br />}     
         {<br />}     
         {<br />}         
        <Switch>
          <Route exact path='/' component={FirstSlider}></Route>
          <Route path='/details/:id' component={Details}></Route>
          <ProtectedRoute path='/cart' component={ Cart } />
          <Route path='/model' component={Model}></Route>
          <Route path='/collection/mens' component={MensCollection} />
          <Route path='/collection/womens' component={WomensCollection} />
          <Route path='/collection/kids' component={KidsCollection} />
          {/* <Route path='/admin' component={Admin} /> */}
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
          <Route component={Default}></Route>
        </Switch>
        {<br />}
        <SiteFooter />
      </React.Fragment>
      </div>
      </Provider>
    );
  }
}

export default App
