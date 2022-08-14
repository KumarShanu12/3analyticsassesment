import React, { useState } from "react";
const Posts = ({ posts, loading }) => {
  let [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return <h2>Loading Please wait for a while...</h2>;
  }

  return (
    <>
      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Search{" "}
          </span>
        </div>
        <input
          placeholder="Search "
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <ul className="list-group mb-4">
        {posts
          .filter((val) => {
            if (val === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
