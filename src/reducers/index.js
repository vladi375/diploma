import { combineReducers } from 'redux';

import SingInReducer from './SignInReducer';
import CatalogReducer from './CatalogReducer';
import ProductReducer from './ProductReducer';

export default combineReducers({
  signIn: SingInReducer,
  catalog: CatalogReducer,
  product: ProductReducer,
});
