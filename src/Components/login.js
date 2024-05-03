import React from "react";

const login = () => {
  return (
    <div className="container mt-3">
      <div>
        <br />
        <h3>Want Your Business to LEVEL UP?</h3>
        <p>Get Started Now </p>
        <p>Improve Performance and Growth Your Website</p>
      </div>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <center>
          <button variant="primary" type="submit" className="btn btn-warning">
            Level Up
          </button>
        </center>
      </form>
      <br />
      <br />
      <br />
    </div>
  );
};

export default login;
