import { IS_AUTH, LOG_OUT } from "./actionTypes";

export const onAuthenticated = () => {
  return {
    type: IS_AUTH,
  };
};

export const onLogOut = () => {
  return {
    type: LOG_OUT,
  };
};
