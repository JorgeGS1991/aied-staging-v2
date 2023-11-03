export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";
export const SET_PROGRESS = "SET_PROGRESS";
export const RESET_PROGRESS = "RESET_PROGRESS";
export const SET_USER_ROLE = "SET_USER_ROLE";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setUserRole = (role) => {
  return {
    type: SET_USER_ROLE,
    payload: role,
  };
};

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
