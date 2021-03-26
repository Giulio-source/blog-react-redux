import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions";

function PostList() {
  const dispatch = useDispatch();

  const postURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return <div>postlist</div>;
}

export default PostList;
