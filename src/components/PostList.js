import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions";
import axios from "axios";

function PostList() {
  const dispatch = useDispatch();

  const postURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchedPosts = axios.get(postURL).then((data) => data.data);
    dispatch(getPosts());
  }, []);
  return <div>postlist</div>;
}

export default PostList;
