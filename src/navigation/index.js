import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from '../components';
import { ROUTES } from '../const';

import {
  SignInPage,
  MainPage,
  CatalogPage,
  ShoppingCartPage,
  Checkout,
  ProductPage,
} from '../pages';

export const Navigator = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={'/catalog/:id'} exact component={ProductPage} />
          <Route path={ROUTES.MAIN} exact component={MainPage} />
          <Route path={ROUTES.CATALOG} exact component={CatalogPage} />
          <Route path={ROUTES.CHECKOUT} exact component={Checkout} />
          <Route path={ROUTES.CART} exact component={ShoppingCartPage} />
          <Route path={ROUTES.SIGNIN} exact component={SignInPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

// class Navigator extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route path={ROUTES.MAIN} exact component={MainPage} />
//           <Route path={ROUTES.CATALOG} exact component={CatalogPage} />
//           <Route path={ROUTES.PAYMENT} />
//           <Route path={ROUTES.CART} exact component={ShoppingCartPage} />
//           <Route path={ROUTES.SIGNIN} exact component={SignInPage} />
//         </Switch>
//       </Router>
//     );
//   }
// }

export default Navigator;
