import { IS_AUTH, LOG_OUT } from "./actionTypes";

export const onAuthenticated = () => {
  return {
    type: IS_AUTH,
  };
};
