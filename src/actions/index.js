import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const getPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(getPosts());
    _.chain(getState().posts)
      .map("userId")
      .uniq()
      .forEach((id) => dispatch(getUser(id)))
      .value();
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "GET_POSTS", payload: response.data });
  };
};

export const getUser = (userId) => (dispatch) => {
  _getUser(userId, dispatch);
};

const _getUser = _.memoize(async (userId, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({ type: "GET_USER", payload: response.data });
});

// export const getUser = (userId) => {
//   return async (dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);

//     dispatch({ type: "GET_USER", payload: response.data });
//   };
// };
