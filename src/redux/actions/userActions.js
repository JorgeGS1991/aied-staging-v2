export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";
export const SET_PROGRESS = "SET_PROGRESS";
export const RESET_PROGRESS = "RESET_PROGRESS";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setProgress = (progress) => ({
  type: SET_PROGRESS,
  payload: progress,
});

export const resetProgress = () => ({
  type: RESET_PROGRESS,
});

export const logOut = () => ({
  type: LOG_OUT,
});
