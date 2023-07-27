import React, { useContext } from "react";
import { BlogContest } from "./BlogContest";
import { Link, useParams } from "react-router-dom";

function BlogPost() {
  const { post } = useContext(BlogContest);
  const { id } = useParams();

  return (
    <>
      <h1>{post[id].postTitle}</h1>
      <p>{post[id].postContent}</p>
      <h3 id="gobak">
        to go back to posts <Link to="/blogs">Click Here</Link>
      </h3>
    </>
  );
}

export default BlogPost;
