import {
  FETCH_ALL_USERS,
  FETCH_USER,
  LOG_OUT,
  RESET_PROGRESS,
  SET_PROGRESS,
  SET_USER,
  SET_USER_ROLE,
  UPDATE_QUIZ_SCORE,
} from "../actions/userActions";

const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  users: [],
  user: storedUser || "",
  progress: 0,
  role: "student",
  quizScore: {
    decompositionScore: 0,
    patternScore: 0,
    abstractionScore: 0,
    algorithmScore: 0,
    introScore: 0,
    pythonOneScore: 0,
    pythonTwoScore: 0,
    pythonThreeScore: 0,
    pythonFiveScore: 0,
    reviewScore: 0,
    emailScore: 0,
    beyondScore: 0,
  },
  totalScore: {
    decompositionScore: 9,
    patternScore: 6,
    abstractionScore: 6,
    algorithmScore: 6,
    introScore: 15,
    pythonOneScore: 6,
    pythonTwoScore: 5,
    pythonThreeScore: 7,
    pythonFiveScore: 4,
    reviewScore: 15,
    emailScore: 0,
    beyondScore: 0,
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case FETCH_USER:
      return {
        ...state,
        user: localStorage.getItem("user"),
      };
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

    case UPDATE_QUIZ_SCORE:
      return {
        ...state,
        quizScore: {
          ...state.quizScore,
          [action.payload.type]: action.payload.quizScore,
        },
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
      localStorage.removeItem("role");
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
