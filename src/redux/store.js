import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productsReducer";
import basketReducer from "./reducers/basketReducer";
const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  products: productReducer,
  cart: basketReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
