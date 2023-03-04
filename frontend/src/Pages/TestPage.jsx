import React, { useState } from "react";
import PayPal from "../components/PayPal";
import styled from "styled-components";

export default function TestPage() {
  const [checkout, setCheckout] = useState(false);

  return (
    <TestPageWrapper>
      {checkout ? (
        <PayPal />
      ) : (
        <button onClick={() => setCheckout(true)}>Checkout</button>
      )}
    </TestPageWrapper>
  );
}

const TestPageWrapper = styled.div`
  margin: 150px 30px;
`;
