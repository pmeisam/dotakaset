import React from "react";
import styled from "styled-components";
// import "./Button.css";

const STYLES = ["btn-primary", "btn-outline"];

const SIZES = ["btn-medium", "btn-large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <ButtonWrapper>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
      >
        {children}
      </button>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  :root {
    --primary: #3acbf7;
  }

  .btn {
    padding: 8px 20px;
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  .btn:hover {
    padding: 8px 20px;
    color: #6568f4;
    transition: 250ms;
  }

  .btn-primary {
    background-color: var(--primary);
  }

  .btn-outline {
    background-color: transparent;
    color: #fff;
    border: 1px solid var(--primary);
  }

  .btn-medium {
    font-size: 18px;
    color: #fff;
  }

  .btn-large {
    padding: 12px 20px;
    font-size: 20px;
    color: #fff;
  }
`;
