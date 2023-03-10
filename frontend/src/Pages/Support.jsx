import React from "react";
import styled from "styled-components";

export default function Support() {
  return (
    <SupportWrapper>
      <form action="">
        <input type="text" placeholder="First Name" required={true} />
        <input type="text" placeholder="Last Name" required={true} />
        <input type="text" placeholder="Email" required={true} />
        <textarea placeholder="Message" required={true} />
        <button>SUBMIT</button>
      </form>
      <div className="vertical-hr"></div>
      <p>
        Thank you for considering our music publishing platform DotaKaset. For inquiries
        about our distribution services, promotional offerings, or general
        questions, please contact us via the form on this page.
        Our team of experts is dedicated to providing exceptional customer
        service and personalized support to help you achieve your music career
        goals. We look forward to hearing from you.
      </p>
    </SupportWrapper>
  );
}

const SupportWrapper = styled.div`
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  p {
    width: 40%;
    margin: 30px;
    text-align: center;
  }
  .vertical-hr {
    // margin-top: -8px;
    width: 0.1%;
    height: 90%;
    float: right;
    background-color: rgb(0, 0, 0, 0.1);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
  }
  form {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 0 auto;
  }
  input {
    margin: 10px 0;
    padding: 5px 10px;
  }
  textarea {
    margin: 10px 0;
    padding: 5px 10px;
    height: 200px;
  }
  button {
    background-color: transparent;
    border: 3px solid black;
    padding: 10px;
    width: 80%;
    margin: 0 auto;
    font-weight: 700;
  }
  button:hover {
    background-color: black;
    color: white;
  }
`;
