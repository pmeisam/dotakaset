import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  let [navOpen, setNavOpen] = useState(false);

  let activeStyle = {
    color: "#5934e8",
  };

  function handleToggleNavbar() {
    console.log("nav bar open clicked");
    setNavOpen(!navOpen);
  }

  return (
    <Wrapper>
      <nav className={navOpen ? "nav-open-menu" : null}>
        <button onClick={handleToggleNavbar} className="close-btn">
          <FontAwesomeIcon icon={faX} />
        </button>
        <Link className="link logo" to="/">
          DotaKaset
        </Link>
        <LinksWrapper>
          <NavLink
            className="link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/about"
          >
            About us
          </NavLink>
          <NavLink
            className="link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/support"
          >
            Support
          </NavLink>
          <NavLink
            className="dashboard-button"
            style={({ isActive }) =>
              isActive ? { color: "white", background: "black" } : undefined
            }
            to="/dashboard"
          >
            MY DASHBOARD
          </NavLink>
        </LinksWrapper>
      </nav>
      <div className={navOpen ? "display-none" : "nav-closed-menu"}>
        <h2 style={{ color: "white" }}>DotaKaset</h2>
        <button onClick={handleToggleNavbar} className="open-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding: 0 40px;
  font-family: Poppins, Helvetica, Arial, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1030;
  width: 100%;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  min-height: 6.25rem;
  background: #fff;
  border-bottom: 1px solid #cecece;

  nav {
    transition: all 2s ease;
    left: 0;
    transform: translate(0%, 0);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 6.25rem;
    align-items: center;
  }

  .toggle-left {
    right: 100%;
    transform: translate(100%, 0);
  }

  .link {
    color: black;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    margin-right: 20px;
  }

  .link:hover {
    color: #5934e8;
  }

  .dashboard-button {
    margin-left: 12px;
    font-size: 15px;
    font-weight: 600;
    border: 2px solid black;
    text-decoration: none;
    color: black;
    padding: 12px 16px;
  }
  .dashboard-button:hover {
    color: white;
    background-color: black;
  }

  .close-btn {
    display: none;
  }
  .nav-closed-menu {
    display: none;
  }
  .display-none {
    display: none;
  }

  .open-btn {
    background-color: transparent;
    color: #959595;
    border: 0;
    margin: 15px;
  }
  .open-btn svg {
    font-size: 25px;
  }
  .active {
    color: #5934e8;
  }

  @media screen and (max-width: 1150px) {
    background: transparent;
    height: 0;
    nav {
      height: 100vh;
      width: 100vw;
      position: relative;
      background: white;
      transition: all 2s ease;
      right: 100%;
      transform: translate(120%, 0);
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .close-btn {
      display: block;
      position: fixed;
      left: 15px;
      top: 15px;
      background: transparent;
      border: none;
    }
    .close-btn svg {
      font-size: 20px;
    }
    .nav-closed-menu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      transition: all 2s ease;
      transform: translate(0, 0);
    }
    .nav-open-menu {
      transition: all 2s ease;
      transform: translate(-5%, 0);
      rigth: 0;
    }
    .link {
      margin: 15px 0;
    }
    .logo {
      margin-bottom: 50px;
    }
  }
`;

const LinksWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

// rfc + tab
