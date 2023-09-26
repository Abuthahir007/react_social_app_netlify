import React from "react";
import { Link,Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <>
      <Link to="/postpage">post1</Link>
      <br></br>
      <Link to="/postpage">post1</Link>
      <br></br>
      <Link to="/postpage">post1</Link>
      <br></br>
      <Link to="/postpage/newpost">newpost</Link>
      <Outlet />
    </>
  );
};

export default PostLayout;
