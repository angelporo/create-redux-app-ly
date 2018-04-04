/**
 * 配置store
 */
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {routerMiddleware, routerReducer} from "react-router-redux";
import home from "./router/home/update.js";
import {composeWithDevTools} from "redux-devtools-extension";

const composeEnhancers =
  process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

export const reducers = combineReducers({
  view: combineReducers({
    home,
  }),
  router: combineReducers({
    routerReducer,
  }),
});

/**
 * 构建中间件
 */
const middlewares = history =>
  applyMiddleware(thunkMiddleware, routerMiddleware(history));
const store = history =>
  createStore(reducers, composeEnhancers(middlewares(history)));

export default store;
