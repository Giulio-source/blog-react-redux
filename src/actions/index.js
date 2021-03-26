import jsonPlaceholder from "../apis/jsonPlaceholder";

export const getPosts = async () => {
  const response = await jsonPlaceholder.get("/posts");
  return {
    type: "GET_POSTS",
    payload: response,
  };
};
