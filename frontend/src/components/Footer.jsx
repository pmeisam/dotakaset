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
      <div className="container">
        <p>Your account</p>
        <Link to="/account">Account overview</Link>
      </div>
      <div className="footer-copy-right">
        ©{year && year} DotaKaset. Website provided by{" "}
        <a
          className="peepbox"
          href="https://meisampoorzand.com"
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
  background: #111;
  color: #fff;
  padding: 1.25rem 0 0;
  text-align: left;
  min-height: 200px;
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;

  .container {
  }

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
`;
