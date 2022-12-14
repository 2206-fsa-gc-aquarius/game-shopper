import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import AllUsers from './components/Users/AllUsers';
import SingleUser from './components/Users/SingleUser';
import SingleProduct from './components/singleProducts/SingleProduct';
import Cart from './components/Cart';
import Signup from './components/SignUp';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Home from './components/Home';
import { me } from './store';
import UserProfile from './components/Users/UserProfile';
import NLISingleProduct from './components/singleProducts/NLISingleProduct';
import NotLoggedInProducts from './components/products/NotLoggedInProducts';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            {/* <Redirect to="/home" /> */}
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/users/:id" component={SingleUser} />
            <Route exact path="/users/:id/profile" component={UserProfile} />
            <Route
              exact
              path="/products/:id/users/:userId"
              component={SingleProduct}
            />
            <Route exact path="/users/cart/:id" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        ) : (
          <Switch>
            {/* <Route path="/" exact component={Login} /> */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products" component={NotLoggedInProducts} />
            <Route exact path="/products/:id" component={NLISingleProduct} />
            <Route exact path="/cart/:id" component={Cart} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
