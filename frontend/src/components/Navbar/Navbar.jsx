import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menuItems from "./MenuItems";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  let activeStyle = {
    color: "#5934e8"
  };

  return (
    <Wrapper>
      <nav className="navbar">
        <h1 className="navbar-logo">DotaKaset</h1>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={active ? faX : faBars} />
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.url}
                  className={item.cName}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  ul {
    margin: 0;
  }
  .navbar {
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    border-bottom: 1px solid gray;
  }

  .navbar-logo {
    color: black;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 20px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-links {
    color: black;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  .nav-links:hover {
    color: #6d76f7;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  .fa-bars {
    color: black;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: 960px) {
    .navbar {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: white;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    .nav-links:hover {
      background-color: #7577fa;
      border-radius: 0;
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }

    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #4ad9e4;
      text-decoration: none;
      color: black;
      font-size: 1.5rem;
    }

    .nav-links-mobile:hover {
      background: #fff;
      color: black;
      transition: 250ms;
    }
  }
`;

// rfc + tab
