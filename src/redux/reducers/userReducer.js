import {
  LOG_OUT,
  RESET_PROGRESS,
  SET_PROGRESS,
  SET_USER,
  SET_USER_ROLE,
} from "../actions/userActions";

const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: storedUser || null,
  progress: 0,
  role: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_ROLE:
      localStorage.setItem("role", JSON.stringify(action.payload));
      return {
        ...state,
        role: action.payload,
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
      localStorage.setItem("role", '"student"');
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
