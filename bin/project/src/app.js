import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import {ConnectedRouter} from "react-router-redux";
import Main from "./router/index.js";
import {BrowserRouter} from "react-router-dom";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

/**
 * 注入store和routers
 */
export default function Container() {
  return (
    <Provider store={store(history)}>
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Main />
        </ConnectedRouter>
      </BrowserRouter>
    </Provider>
  );
}
