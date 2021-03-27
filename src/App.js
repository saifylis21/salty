import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Browse from './containers/Browse/Browse';
import Checkout from './containers/Checkout/Checkout';
import Category from './containers/Category/Category';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/browse/:category" exact component={Category} />
          <Route path="/browse" exact component={Browse} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
