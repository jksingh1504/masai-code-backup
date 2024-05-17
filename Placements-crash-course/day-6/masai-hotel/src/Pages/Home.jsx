import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div data-cy="welcome-text">
      {/* Add the message along with the link */}
      Welcome to the Home page, click here to <Link to="/login">login</Link>
    </div>
  );
};
