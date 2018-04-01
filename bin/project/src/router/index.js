import React from "react";
import {connect} from "react-redux";
import {Route, Switch, withRouter, Link} from "react-router-dom";
// import Home from "./home/home.js";
function User() {
  return <Link to="/feedback">this is user page!</Link>;
}

function Feedback() {
  return <div>this is feedback page ! </div>;
}

export function Main(props) {
  return (
    <Switch>
      <Route path="/" component={User} />
      <Route path="/feedback" component={Feedback} />
    </Switch>
  );
}

// const Home = {
//   loader: () => import(/* webpackChunkName: "dashboard" */ "./home/home.js"),
//   loading: () => null,
// };

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispachToProps(dispatch) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(Main));
