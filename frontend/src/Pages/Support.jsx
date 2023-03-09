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
        Welcome to our support page! We're here to assist you with any questions
        you may have about our music publishing services. Our team of experts is
        committed to providing exceptional customer service and will be happy to
        assist you in any way we can. If you have any inquiries about our
        platform, distribution services, or promotional offerings, please feel
        free to contact us. Our team is available to answer your questions and
        provide you with the information you need to get your music on major
        streaming platforms like YouTube and Spotify. We understand that every
        artist has unique needs and we're here to help you achieve your goals.
        Whether you're just starting out or have an established career, we have
        the expertise to help you succeed. Our team is dedicated to providing
        you with personalized service and support to ensure that your music
        reaches a global audience. To get in touch with us, simply fill out the
        contact form on this page and one of our representatives will respond to
        your inquiry as soon as possible. Thank you for considering our music
        publishing platform. We look forward to hearing from you and helping you
        take your music career to the next level!
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
