import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SubscriptionCard({ planName, price, details, planId, paypalKey }) {
  return (
    <CardWrapper>
      <div className="plan_card">
        <div className="plan_card_header">{planName}</div>

        <div className="plan_card_body">
          <div className="plan_card_price">${price}/month{planName === "Platinum" && "*" }</div>
          <p className="plan_card_description">{details}</p>
        </div>

        <div className="plan_card_footer">
          <Link to={`/checkout/${price}/${planId}`} className="plan_card_submit_btn">become a member now</Link>
        </div>
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  font-family: Poppins, Helvetica, Arial, sans-serif;
  display: flex;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 1.875rem;

  .plan_card {
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    background: #fff;
    box-shadow: 0 3px 12px 0 rgb(99 99 99 / 30%);
  }

  .plan_card_header {
    padding: 1.875rem 1.25rem;
    font-size: 1.875rem;
    color: #1a1a1a;
    font-weight: 700;

    line-height: 1.45;
    border-bottom: 1px solid #cecece;
  }

  .plan_card_body {
    flex-grow: 1;
    padding: 1.875rem 0.9375rem 1.25rem;
  }

  .plan_card_price {
    color: #1a1a1a;
    font-weight: 500;
    margin-bottom: 1.875rem;
    font-size: 3.125rem;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    letter-spacing: -0.04063rem;
  }

  .plan_card_description {
    margin-bottom: 1.25rem;
    font-size: 1.025rem;
    color: #1a1a1a;
    line-height: 1.4;
    // letter-spacing: -0.04063rem;
  }

  .plan_card_footer {
    padding: 1.25rem 1.25rem 3.125rem;
  }

  .plan_card_submit_btn {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    vertical-align: middle;
    letter-spacing: 0.125rem;
    user-select: none;
    background-color: transparent;
    border: 3px solid transparent;
    padding: 0.6875rem 1.25rem;
    font-size: 1 rem;
    line-height: 1.5;
    border-radius: 0;
    border-color: #1a1a1a;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
  }

  .plan_card_submit_btn:hover {
    background-color: #1a1a1a;
    color: white;
  }

  @media only screen and (max-width: 900px) {
    max-width: 60%;
  }

  @media only screen and (max-width: 600px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 500px) {
    max-width: 90%;
  }
`;
