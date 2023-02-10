import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  

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
      navigate('/verifyEmail')
    }
  }, [])
  return (
    
    <DashboardWrapper>
      <h1>Hello {currentUser.email}</h1>
      <button onClick={handleLogout}>Log out</button>
      <Link to="/subscriptions">Update Subscription</Link>
    </DashboardWrapper>
  );
}

const DashboardWrapper = styled.main`
  margin-top: 100px;
`;
