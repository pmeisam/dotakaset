import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <FooterWrapper>
      <h1>LOGO</h1>
      <div className="link_container">
        <Link className="link" to="/account">
          Account Overview
        </Link>
        <Link className="link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="link" to="/subscriptions">
          Subscriptions
        </Link>
        <Link className="link" to="/about">
          About Us
        </Link>
        <Link className="link" to="/support">
          Support
        </Link>
      </div>
      <div className="footer-copy-right">
        ©{year && year} DotaKaset. Website provided by{" "}
        <a
          className="peepbox_link"
          href="https://www.meisam.dev"
          target="_blank"
          rel="noreferrer"
        >
          Peep Box INC.
        </a>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: #2f2d2e;
  color: #fff;
  padding: 1.25rem 0 0;
  text-align: left;
  min-height: 250px;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;

  .footer-copy-right {
    background: #000;
    font-size: 12px;
    padding-bottom: 13px;
    padding-top: 13px;
    text-align: center;
    width: 100vw;
    position: absolute;
    bottom: 0;
  }

  .link {
    text-decoration: none;
    display: block;
    font-size: 0.75rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #f5f5f5;
    font-weight: 400;
  }

  .peepbox_link {
    color: white;
    font-weight: 700;
  }

  .link:hover,
  .peepbox_link:hover {
    color: #f15156;
  }

  .link_container {
    width: 30%;
    margin-left: auto;
  }

  @media only screen and (max-width: 600px) {
    .link_container {
      text-align: center;
      width: 100%;
      margin: 0;
    }
  }
`;
