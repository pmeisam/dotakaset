import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Dashboard() {
  const navigate = useNavigate();
  const { currentUser, userEntity, logout } = useAuth();
  const [error, setError] = useState("");
  const [contentList, setContentList] = useState([
    {
      name: "test 1",
      status: "Pending",
      dateCreated: new Date(),
      coverImage: "./images/Fotor_AI.png",
      id: "testpage",
    },
    {
      name: "test 2",
      status: "Pending",
      dateCreated: new Date(),
      coverImage: "./images/Fotor_AI.png",
      id: "testpage",
    },
    {
      name: "test 3",
      status: "Pending",
      dateCreated: new Date(),
      coverImage: "./images/Fotor_AI.png",
      id: "testpage",
    },
    {
      name: "test 4",
      status: "Pending",
      dateCreated: new Date(),
      coverImage: "./images/Fotor_AI.png",
      id: "testpage",
    },
    {
      name: "test 5",
      status: "Pending",
      dateCreated: new Date(),
      coverImage: "./images/Fotor_AI.png",
      id: "testpage",
    },
    {
      name: "test 6",
      status: "Pending",
      dateCreated: new Date(),
      coverImage: "./images/Fotor_AI.png",
      id: "testpage",
    },
  ]);

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
    if (!userEntity.data.subscribed) {
      navigate("/subscriptions");
    }
  }, []);

  useEffect(() => {
  }, []);

  return (
    <DashboardWrapper>
      <Link className="upload_link" to="/upload">
        +
      </Link>
      {contentList &&
        contentList.map((c, i) => (
          <Link
            to={`/details/${c.id}`}
            key={i}
            style={{ backgroundImage: `url(${c.coverImage})`}}
            className="content"
          >
            status: {c.status}
          </Link>
        ))}
      {/* <button onClick={handleLogout}>Log out</button> */}
    </DashboardWrapper>
  );
}

const DashboardWrapper = styled.main`
  margin-top: 100px;
  min-height: 100vh;
  display: flex;

  
  .upload_link {
    border: 1px dotted lightgray;
    text-decoration: none;
    color: black;
    font-size: 2.6rem;
    font-weight: 100;
    display: flex;
    width: 150px;
    height: 150px;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
  .content {
    width: 150px;
    height: 150px;
    display: flex;
    background-size: cover;
    margin: 20px;
  }

`;
