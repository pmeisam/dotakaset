import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <Wrapper>
      <div className="bg-image-container">
        <img
          src="./images/signup-bg.jpg"
          alt="Login Background Image"
          className="page-bg__img"
        />
      </div>
      <div className="content-container">
        <div>
          <h1>DotaKaset Logo</h1>
        </div>
        <div className="card">
          <h2>Create an account</h2>
          <p className="login">
            Already have an account?{" "}
            <Link className="login-link" to="/login">
              Log in
            </Link>
          </p>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="email"
              ref={emailRef}
              required
              placeholder="Email"
            />
            <input
              className="input"
              type="password"
              ref={passwordRef}
              required
              placeholder="Password"
            />
            <input
              className="input"
              type="password"
              ref={passwordConfirmRef}
              required
              placeholder="Confirm password"
            />
            <button disabled={loading} className="submit-btn">
              Sign up
            </button>
          </form>
          <div>
            <p className="auth-or">or</p>
          </div>
          <div>Sign up with google needs to be added</div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
  height: 100vh;
  .bg-image-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
  }
  .page-bg__img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }

  .content-container {
    heigth: 100vh;
    display: flex;
    height: 100vh;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    // flex: 1 0 auto;
  }
  .content-container div h1 {
    color: white;
  }
  .card {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 50px 30px;
    border-radius: 0;
    border: none;
  }
  .card h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }

  .input {
    border: 1px solid black;
    border-radius: 0;
    padding: 10px 10px;
    width: 100%;
    margin-bottom: 20px;
  }

  .submit-btn {
    border-radius: 0;
    border: 3px solid #5934e8;
    color: #5934e8;
    width: 100%;
    background: transparent;
    padding: 10px;
  }

  .submit-btn:hover {
    color: white;
    background: #5934e8;
  }
  .login {
    color: gray;
    font-size: 13px;
  }

  .login-link {
    color: #5934e8;
    text-decoration: none;
  }

  .auth-or {
    margin-top: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    color: #636363;
    font-size: 0.875rem;
    text-transform: uppercase;
    font-size: 12px;
  }

  .auth-or:before {
    content: "";
    flex-grow: 1;
    border-bottom: 1px solid #636363;
    margin: 10px;
  }

  .auth-or:after {
    content: "";
    flex-grow: 1;
    border-bottom: 1px solid #636363;
    margin: 10px;
  }

  @media screen and (max-width: 900px) {
    .content-container {
      flex-direction: column;
      justify-content: center;
    }

    .content-container div h1 {
      display: none;
    }
  }
`;
