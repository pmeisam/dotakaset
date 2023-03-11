import React from "react"; // rfc
import PayPalBtn from "./PayPalBtn";
import styled from 'styled-components';
import UserServices from "../services/UserServices";
import { useParams, useNavigate } from "react-router-dom";

function Paypal() {
  const navigate = useNavigate();
  const {planId, amount} = useParams();

  console.log(useParams())

  const paypalSubscribe = (data, actions) => {
    return actions.subscription.create({
      plan_id: planId,
    });
  };
  const paypalOnError = (err) => {
    console.log("Error", err);
  };

  const paypalOnApprove = (data, detail) => {
    // call the backend api to store transaction details

    console.log("Payapl approved");
    console.log(data.subscriptionID);
    UserServices.createUserEntity({
      subscribed: true
    });
    navigate("/Dashboard");
  };

  return (
    <PaypalBtnWrapper>
      <PayPalBtn
        amount={amount}
        currency="USD"
        createSubscription={paypalSubscribe}
        onApprove={paypalOnApprove}
        catchError={paypalOnError}
        onError={paypalOnError}
        onCancel={paypalOnError}
      />
    </PaypalBtnWrapper>
  );
}

export default Paypal;

const PaypalBtnWrapper = styled.div`
  width: 50%;
  margin: 12rem auto;

  @media only screen and (max-width: 1015px) {
    margin: 13rem auto;
  }
  @media only screen and (max-width: 613px) {
    margin: 14rem auto;
  }
`;
