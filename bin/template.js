function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

const reducerJs = function(viewName) {
    const reducerName = viewName + "Reducer";
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
    const ComponentName = firstUpperCase(pageName);
  return `
/**
 * Create a dot.
 * @param {Type}  Value -  Note
 * @param {Type}  Value -  Note
 */
 import React from "react";
 import {connect} from "react-redux";
 import Loadable from 'react-loadable';

    function ${ComponentName}() {
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

export default connect(mapStateToProps, mapStateToDispatch)(${ComponentName});
    `;
};


const  componentJs = function (pageName) {
    const ComponentName = firstUpperCase(pageName);

    return `
/**
 * Create a dot.
 * @param {Type}  Value -  Note
 * @param {Type}  Value -  Note
 */
import React from "react";
import "./${pageName}.css";

export default function ${ComponentName}() {
  return (
    <div className="root">
          page container
    </div>
  );
}
    `
}

const ComponentIndexJs = function (pageName){
    const ComponentName = firstUpperCase(pageName);
    return `
/**
 * 最后一层到处组建,主要用于组建公共类型一起构建
 * @param {Type}  Value -  Note
 * @param {Type}  Value -  Note
 */
import ${ComponentName} from "./${pageName}.js";

export default ${ComponentName};
    `
}

module.exports = {
    viewJs:viewJs,
    viewReducerJs: reducerJs,
    componentJs: componentJs,
    componentIndexJs: ComponentIndexJs,
}
