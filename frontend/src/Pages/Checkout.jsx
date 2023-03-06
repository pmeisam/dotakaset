import React from "react";
import styled from "styled-components";
import Paypal from "../components/PayPal";
import { useParams } from "react-router-dom";

export default function Checkout() {
  const params = useParams();
  console.log(params);

  return (
    <CheckoutWrapper>
      <Paypal planId={params.planId} amount={params.price} />
    </CheckoutWrapper>
  );
}

const CheckoutWrapper = styled.div``;
