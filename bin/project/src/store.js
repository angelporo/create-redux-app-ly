/**
 * 配置store
 */
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {routerMiddleware, routerReducer} from "react-router-redux";
import home from "./router/home/update.js";

// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;

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

const store = history => createStore(reducers, compose(middlewares(history)));

export default store;
