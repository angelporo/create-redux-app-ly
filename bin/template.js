const reducerJs = function(viewName) {
    const reducerName = viewName + "Reducers";
  return `
/**
 * current page action and reducers;
 */
import * as ActionType from "./type";

export const initdata = {

};

function ${reducerName} (state = initdata, action) {
    const {type} = action;
    switch (type) {
    case ActionType.TEST:
        return {
               ...state,
        };
    default: {
        return state;
    }
  }
}

export default ${reducerName};
    `;
};

const viewJs = function(pageName) {
  return `
/**
 * Create a dot.
 * @param {Type}  Value -  Note
 * @param {Type}  Value -  Note
 */
 import React from "react";
 import {connect} from "react-redux";

 function ${pageName}() {
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

export default connect(mapStateToProps, mapStateToDispatch)(${pageName});
    `;
};


const  componentJs = function (pageName) {
    return `
    pagename.js
    `
}

const ComponentIndexJs = function (pageName){
    return `
    index.js
    `
}

module.exports = {
    viewJs:viewJs,
    viewReducerJs: reducerJs,
    componentJs: componentJs,
    componentIndexJs: ComponentIndexJs,
}
