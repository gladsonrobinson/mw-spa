import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import AppReducer from "./reducer";

export const history = createHistory();

const initialState = {};
const middleware = [thunk];

const composedEnhancers = compose(applyMiddleware(...middleware));

export default createStore(
  connectRouter(history)(AppReducer),
  initialState,
  composedEnhancers
);
