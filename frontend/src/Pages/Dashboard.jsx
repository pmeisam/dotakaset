import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
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

  return (
    <DashboardWrapper>
      <h1>Hello {currentUser.email}</h1>
    </DashboardWrapper>
  );
}

const DashboardWrapper = styled.main`
  margin-top: 100px;
`;
