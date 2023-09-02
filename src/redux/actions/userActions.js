export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logOut = () => ({
  type: LOG_OUT,
});
