import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsAndUsers());
  }, [dispatch]);

  const renderedList = posts.map((post) => {
    return (
      <div key={post.id}>
        <h6>{post.title}</h6>
        <p>{post.body}</p>
        <UserHeader userId={post.userId} />
      </div>
    );
  });

  console.log(posts);

  return <div>{renderedList}</div>;
}

export default PostList;
