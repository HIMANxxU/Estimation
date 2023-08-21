import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        <h1 style={{ marginBlock: "20px" }}>404 - Page Not Found</h1>
        <p>The page you are looking for might have been removed </p>
        <p>had its name changed or is temporarily unavailable.</p>
        <Link to="/">Back To Home</Link>
      </div>
    </>
  );
};

export default PageNotFound;
