import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const RATINGS = ["g", "pg", "pg-13", "r"];
const ACTIONS = {
  UPDATE_KEYWORD: "UPDATE_KEYWORD",
  UPDATE_RATING: "UPDATE_RATING",
};

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

const Form = ({ initialKeyword = "", initialRating }) => {
  // const [rating, setRating] = useState(initialRating);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, {
    keyword: initialKeyword,
    times: 0,
    rating: initialRating,
  });

  const { keyword, times, rating } = state;

  const handleChange = (e) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}/${rating}`);
  };
  const handleChangeRating = (e) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Buscar</label>
      <input
        type="search"
        placeholder="Escribe tu gif aqui..."
        onChange={handleChange}
        value={keyword}
      ></input>
      <select onChange={handleChangeRating} value={rating}>
        {RATINGS.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
      <small style={{ color: "whitesmoke" }}>{times}</small>
    </form>
  );
};

export default Form;
