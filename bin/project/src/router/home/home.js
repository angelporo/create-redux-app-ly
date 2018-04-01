import React from "react";
import {connect} from "react-redux";
import Header from "../../component/header"

function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    author: "<940079461@qq.com>",
  };
}

function mapStateToDispatch(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapStateToDispatch)(Home);
