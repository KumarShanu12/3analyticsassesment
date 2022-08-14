import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const token = localStorage.getItem("token");
  let loggenIn = true;
  if (token == null) {
    loggenIn = false;
  }
  return (
    <>
      {loggenIn ? (
        <div className='admin_page'>
          <h1>Welcome Admin !</h1>
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />

          <button type="button" className="btn btn-warning">
            <Link to="/logout">Logout</Link>
          </button>
        </div>
      ) : (
        <Navigate to="/"/>
      )}
    </>
  );
};

export default Admin;
