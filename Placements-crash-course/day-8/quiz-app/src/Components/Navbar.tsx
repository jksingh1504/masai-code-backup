import React from "react";
interface pageNameInterface {
  pageName: String;
}

export const Navbar = ({ pageName }: pageNameInterface) => {
  return (
    <div className="navbar">
      <h2>Quiz Bank</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="all-problems" href="/all-problems">
        All Problems
      </a>
      <h3 data-testid="page-name">{pageName}</h3>
    </div>
  );
};
