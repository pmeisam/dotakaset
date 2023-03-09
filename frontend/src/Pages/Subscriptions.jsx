import React from "react";
import styled from "styled-components";
import SubscriptionCard from "../components/SubscriptionCard";

export default function Subscriptions() {
  return (
    <Wrapper>
      <h1 className="section-pick-plan_title">
        Please select a plan that best fits your needs.
      </h1>
      <div className="plan_list_items">
        <SubscriptionCard
          planName="Silver"
          price="15"
          details="You can upload up to 5 songs annually, 
          and have them distributed to 
          popular streaming platforms like YouTube, Spotify, 
          Apple Music, Amazon Music, and SoundCloud."
          planId="P-49690677HG9807049MQBJBIY"
        />
        <SubscriptionCard
          planName="Gold"
          price="25"
          details="You can upload up to 10 songs annually, 
          and have them distributed to 
          popular streaming platforms like YouTube, Spotify, 
          Apple Music, Amazon Music, and SoundCloud."
          planId="P-49690677HG9807049MQBJBIY"
        />
        <SubscriptionCard
          planName="Platinum"
          price="0"
          details="Unleash your music without any limitations, hassle-free."
          planId={null}
        />
      </div>
      <p className="platinum_context">
        * The Platinum package offers a comprehensive solution for independent
        musicians seeking to distribute their music. If you do not have an
        international payment card such as Visa, MasterCard, or Amex, we can
        provide one for you, ensuring a smooth and hassle-free payment process.
        Additionally, our rigorous quality control measures require each upload
        to undergo a 10-day pending period to ensure that the music is original
        and not subject to copyright. Finally, our team will take care of
        obtaining the copyright for your music, protecting your intellectual
        property and ensuring that no one else can upload your music to any
        music or streaming applications or websites.
        <br />
        We believe that our Platinum package provides a reliable and efficient
        solution for musicians looking to distribute their music and build their
        audience. Please do not hesitate to contact us if you have any questions
        or would like to learn more about our services.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .section-pick-plan_title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 2.5rem;
    text-align: center;
    line-height: 1.4;
    letter-spacing: 0.15rem;
    margin-bottom: 2.1875rem;
    margin-top: 2.1875rem;
  }

  .plan_list_items {
    display: flex;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 1.875rem;
  }

  .platinum_context {
    width: 70%;
    margin: 0 auto 100px auto;
    text-align: center;
    color: #2f2d2e;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    letter-spacing: 0.05rem;
  }

  @media only screen and (max-width: 1020px) {
    .platinum_context {
      width: 90%;
    }
  }

  @media only screen and (max-width: 900px) {
    .plan_list_items {
      flex-direction: column;
      align-items: center;
    }
  }
  @media only screen and (max-width: 700px) {
    .section-pick-plan_title {
      font-size: 1.5rem;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 30px;
    }
  }
`;
