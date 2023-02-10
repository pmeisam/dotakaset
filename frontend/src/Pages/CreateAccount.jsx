import React from "react";
import { isStyledComponent } from "styled-components";

export default function CreateAccount() {
  return (
    <Wrapper>
      <div>
        <h1>Please Enter Account Information</h1>
        <input placeholder="First Name"/>
        <input placeholder="Last Name" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
