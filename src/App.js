import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Browse from './containers/Browse/Browse';
import Checkout from './containers/Checkout/Checkout';
import Category from './containers/Category/Category';
import Product from './containers/Product/Product';
import Auth from './containers/Auth/Auth';
import Orders from './containers/Orders/Orders';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

function App(props) {

  useEffect(() => {
    props.onTryAutoSignup()
  });

  return (
    <div>
      <Layout>
        <Switch>
          {props.isAuthenticated && <Route path="/logout" exact component={Logout} />}
          {props.isAuthenticated && <Route path="/checkout" exact component={Checkout} />}
          {props.isAuthenticated && <Route path="/orders" exact component={Orders} />}
          <Route path="/auth" exact component={Auth} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/browse/:category" exact component={Category} />
          <Route path="/browse" exact component={Browse} />
          <Route path="/" exact component={Home} />

          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
