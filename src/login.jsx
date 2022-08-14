import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const submitHandler = () => {
    if (name === "admin" && password === "admin@123") {
      localStorage.setItem("token", "random");
      setIsLoggedIn(true);
    }
  };
  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/admin" />
      ) : (
        <div className="login_form">
          <h1>Login Form</h1>
          <form>
            <div class="form-outline mb-4">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Username"
                type="email"
                id="form2Example1"
                class="form-control"
              />
              <label class="form-label" for="form2Example1">
                Email address
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                type="password"
                id="form2Example2"
                class="form-control"
              />
              <label class="form-label" for="form2Example2">
                Password
              </label>
            </div>
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    checked
                  />
                  <label class="form-check-label" for="form2Example31">
                 
                    Remember me 
                  </label>
                </div>
              </div>

              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            <button
              onClick={() => submitHandler()}
              type="button"
              class="signinbtn btn btn-primary btn-block mb-4"
            >
              Sign in
            </button>
            <div class="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
