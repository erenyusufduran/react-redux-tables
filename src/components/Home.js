import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="/add" className="btn btn-outline-dark float-right">
            Add Contact
          </Link>
        </div>
        <div className="col-md-6 mx-auto">
          <h1>Welcome to Contact Book</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
