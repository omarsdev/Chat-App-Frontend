import AuthService from "../../services/authService";

import { LOGOUT, LOGIN, REGISTER, UPDATE_PROFILE } from "../types";

export const login = (params, history) => (dispatch) => {
  return AuthService.login(params)
    .then((data) => {
      console.log(data);
      dispatch({
        type: LOGIN,
        payload: data,
      });
      history.push("/");
    })
    .catch((err) => console.log(err));
};

export const register = (params, history) => (dispatch) => {
  return AuthService.register(params)
    .then((data) => {
      console.log(data);
      dispatch({
        type: REGISTER,
        payload: data,
      });
      history.push("/");
    })
    .catch((err) => console.log(err));
};

export const logout = (params, history) => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};

export const updateProfile = (params) => (dispatch) => {
  return AuthService.updateProfile(params)
    .then((data) => {
      dispatch({ type: UPDATE_PROFILE, payload: data });
    })
    .catch((err) => {
      throw err;
    });
};
