import React from "react";
interface propInterface {
  pageName: String;
}

export const Navbar = ({pageName}:propInterface) => {
  return (
    <div className="navbar">
      <h2>Media Post</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-post-link" href="/add-post">
        Add New Post
      </a>
      <h3 data-testid="page-name">{pageName}</h3>
    </div>
  );
};
