import "./Blog.css";
import { BlogContest } from "./BlogContest";
import BlogPost from "./BlogPost";
import Blogs from "./Blogs";
import CreateBlog from "./CreateBlog";
import Home from "./Home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
const initials = [
  {
    postTitle: "What is Lorem Ipsum?",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    postTitle: "Where does it come from?",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },

];

function App() {
  const [post, setPost] = useState(initials);
  return (
    <>
      <BlogContest.Provider value={{ post, setPost }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogpost/:id" element={<BlogPost />} />
        </Routes>
      </BlogContest.Provider>
    </>
  );
}

export default App;
