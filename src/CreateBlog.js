import React, { useContext } from "react";
import { BlogContest } from "./BlogContest";
import { Link } from "react-router-dom";

function CreateBlog() {
  const { post, setPost } = useContext(BlogContest);

  const handleSubmit = (event) => {
    event.preventDefault();
    const Title = event.target.blogTitle.value;
    const Content = event.target.blogContent.value;

    setPost(
      (a) =>
        (a = [
          ...post,
          {
            postTitle: Title,
            postContent: Content,
          },
        ])
    );
    event.target.blogTitle.value = "";
    event.target.blogContent.value = "";
    alert("Your Blog Post Submitted Successfully");
  };

  return (
    <div className="container">
      <h1>Write a Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="blog-title">Blog Title:</label>
        <input
          type="text"
          name="blogTitle"
          id="blogTitle"
          placeholder="Write a title for your post"
          required
        />
        <label htmlFor="blog-content">Blog Content:</label>
        <textarea
          name="blogContent"
          id="blogContent"
          cols="30"
          rows="10"
          placeholder="enter your blog content here..."
          required
        ></textarea>
        <input type="submit" value="Submit your Post" className="btn" />
      </form>
      <p>
        To read Blogs <Link to="/blogs">Clik Here</Link>
      </p>
    </div>
  );
}

export default CreateBlog;
