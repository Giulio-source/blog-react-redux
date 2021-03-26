import { combineReducers } from "redux";

const postsReducer = (state = [], action) => {
  if (action.type === "GET_POSTS") {
    return action.payload;
  }
  return state;
};

export default combineReducers({ posts: postsReducer });
