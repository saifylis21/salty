import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Browse from './containers/Browse/Browse';
import Checkout from './containers/Checkout/Checkout';
import Category from './containers/Category/Category';
import Product from './containers/Product/Product';
import Auth from './containers/Auth/Auth';
import Orders from './containers/Orders/Orders';
import Logout from './containers/Auth/Logout/Logout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/logout" exact component={Logout} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/browse/:category" exact component={Category} />
          <Route path="/browse" exact component={Browse} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
