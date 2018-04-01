/**
 * Create a dot.
 * @param {Type}  Value -  Note
 * @param {Type}  Value -  Note
 */
import React from "react";
import {connect} from "react-redux";

function Home() {
  return (
    <div>
          Tempalte page!
    </div>
  );
}

function mapStateToProps(state) {
  return {
  };
}

function mapStateToDispatch(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapStateToDispatch)(Home);
