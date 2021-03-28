import React from "react";
import { useSelector } from "react-redux";

function UserHeader({ userId }) {
  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  return <div>{user ? user.name : "User"} </div>;
}

export default UserHeader;
