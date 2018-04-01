/**
 * current page action and reducers;
 */
import * as ActionType from "./type";

export const initdata = {

};

function home(state = initdata, action) {
  const {type} = action;
  switch (type) {
    case ActionType.TEST:
      return {
        ...state,
        user: action.payload,
      };
    default: {
      return state;
    }
  }
}

export default home;
