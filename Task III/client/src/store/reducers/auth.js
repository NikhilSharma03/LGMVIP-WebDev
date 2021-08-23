import { IS_AUTH, LOG_OUT } from "./../actions/actionTypes";

const reducer = (state = { isAuth: false }, action) => {
  switch (action.type) {
    case IS_AUTH:
      return {
        isAuth: true,
      };

    default:
      return state;
  }
};

export default reducer;
