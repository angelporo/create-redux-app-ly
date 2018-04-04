import React from "react";
import {connect} from "react-redux";
import {Route, Switch, withRouter, Link} from "react-router-dom";
import Home from "./home/home";

function User() {
  return (
    <Link style={{color: "red"}} to="/feedback">
      this is user page!
    </Link>
  );
}

export function Main(props) {
  return (
    <Switch>
      <Route path="/feedback" component={Home} />
      <Route path="/" component={User} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispachToProps(dispatch) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(Main));
