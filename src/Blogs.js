import React, { useContext } from "react";
import { BlogContest } from "./BlogContest";
import { Link, useNavigate } from "react-router-dom";

function Blogs() {
  const { post } = useContext(BlogContest);
  const navigate = useNavigate();
  return (
    <div className="blog-list-container">
      <ul>
        {post.map((post, index) => (
          <li key={index}>
            <h2>{post.postTitle}</h2>

            <button
              onClick={() => {
                navigate(`/blogpost/${index}`);
              }}
            >
              Read Post
            </button>
          </li>
        ))}
      </ul>
      <h3>
        Want to Create another Blog post ?{" "}
        <Link to="/create-blog">Click Here</Link>
      </h3>
    </div>
  );
}

export default Blogs;
