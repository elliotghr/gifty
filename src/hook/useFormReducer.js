import { useReducer } from "react";
import { ACTIONS } from "../actions/useFormActions";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      };
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export const useFormReducer = ({ initialKeyword, initialRating }) => {
  const [state, dispatch] = useReducer(reducer, {
    keyword: initialKeyword,
    times: 0,
    rating: initialRating,
  });

  const updateKeyword = (keyword) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword });
  };

  const updateRating = (rating) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating });
  };

  const { keyword, times, rating } = state;

  return {
    keyword,
    times,
    rating,
    updateKeyword,
    updateRating,
  };
};
