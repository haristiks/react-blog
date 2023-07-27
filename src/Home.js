import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigte = useNavigate();
  return (
    <>
      <div className="home-container">
        <h1>Welcome to My Blog Vizard</h1>
        <button
          onClick={() => {
            navigte("/create-blog");
          }}
          className="btn"
        >
          Create Blog
        </button>
        <button
          onClick={() => {
            navigte("/blogs");
          }}
          className="btn"
        >
          Read Blog
        </button>
      </div>
    </>
  );
}

export default Home;
