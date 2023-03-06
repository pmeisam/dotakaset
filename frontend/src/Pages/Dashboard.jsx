import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Dashboard() {
  const { currentUser, userEntity, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    if (!currentUser.emailVerified) {
      navigate("/verifyEmail");
    }
    if (!userEntity.retrieved) {
      navigate("/createUser");
    }
    if (!currentUser.subscribed) {
      navigate("/subscriptions");
    }
  }, []);

  return (
    <DashboardWrapper>
      <h1>Hello {currentUser.email}</h1>
      <br />
      <Link to="/upload">Upload a song</Link>
      <br />
      <Link to="/subscriptions">Update Subscription</Link>
      <br />
      <button onClick={handleLogout}>Log out</button>
    </DashboardWrapper>
  );
}

const DashboardWrapper = styled.main`
  margin-top: 100px;
`;
