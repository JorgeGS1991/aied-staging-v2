import {
  LOG_OUT,
  RESET_PROGRESS,
  SET_PROGRESS,
  SET_USER,
} from "../actions/userActions";

const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: storedUser || null,
  progress: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        user: action.payload,
      };

    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };

    case RESET_PROGRESS:
      return {
        ...state,
        progress: 0,
      };

    case LOG_OUT:
      // Clear user data from local storage
      localStorage.removeItem("user");

      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
