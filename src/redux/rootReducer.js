import { combineReducers } from 'redux';

import productOrderReducer from '../redux/card-product/reducer';

const rootReducer = combineReducers({
  productOrder: productOrderReducer
});

export default rootReducer;