import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import UserServices from "../services/UserServices";

export default function CreateUser() {
  const navigate = useNavigate();
  const inputRef = useRef({});
  const { currentUser, userEntity } = useAuth();
  /* 
    req.body.id,
    req.body.entityId,
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.phoneNumber,
    req.body.whatsAppNumber,
    req.body.bestWayContact,
    req.body.amazonMusic,
    req.body.youtubeMusic,
    req.body.appleMusic,
    req.body.youtube,
    req.body.spotify,
    req.body.facebook,
    req.body.instagram
    */

  const handleCreateUser = (e) => {
    e.preventDefault();

    let user = {
      entityId: currentUser.uid,
      email: currentUser.email,
      firstName: inputRef.current["first_name"].value,
      lastName: inputRef.current["last_name"].value,
      phoneNumber: inputRef.current["phone_number"].value,
    };
    UserServices.createUserEntity(user);
    window.location.reload();
  };

  useEffect(() => {
    inputRef.current["first_name"].focus();
    if (userEntity.retrieved) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Wrapper>
      <h1> Create User </h1>
      <form onSubmit={handleCreateUser}>
        <input
          ref={(el) => (inputRef.current["first_name"] = el)}
          placeholder="First Name"
          required={true}
        ></input>
        <input
          ref={(el) => (inputRef.current["last_name"] = el)}
          placeholder="Last Name"
          required={true}
        ></input>
        <input
          ref={(el) => (inputRef.current["phone_number"] = el)}
          placeholder="Phone Number"
          type="tel"
          required={true}
        />
        {/* <input placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" required={true} />
        <input placeholder="Phone Number" type="number" required={true} />
        <input placeholder="WhatsApp Number" type="number" required={true} />
        <input placeholder="Best Way to Contact" type="text" required={true} /> */}
        {/* <input placeholder="amazon music link" type="number" required={true} /> */}
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin-top: 100px;
`;
