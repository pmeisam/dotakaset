import React from "react";
import styled from "styled-components";

export default function Subscriptions() {
  return (
    <Wrapper>
      <h1>Subscriptions and Services</h1>
      <div className="subscriptions">
        <h2>Subscriptions</h2>
        <div className="card">
          <h2>Basic Package</h2>
          <p>
            $10 a month to upload 5 songs a year and it will be uploaded to
            youtube, spotify, apple music, amazon music, and pandora
          </p>
          <button>Choose Basic</button>
        </div>
        <div className="card">
          <h2>Ultimate Package</h2>
          <p>
            $18 a month to upload 10 songs a year and it will be uploaded to
            youtube, spotify, apple music, amazon music, and pandora
          </p>
          <button>Choose ultimate</button>
        </div>
        <div className="card">
          <h2>Premium Package</h2>
          <h3>Free</h3>
          <p>
            upload as many songs as you want and pay commissions based on the
            money we make. if the viewers are less than a million the share is
            50 50 if the viewers are over a million the share is 40 us and 60
            percent to you if over 5 million 20 to 80 over 20 million we only
            get 10 percent of the income
          </p>
          <button>Choose Premium</button>
        </div>

        <div className="services">
          <h2>Services</h2>
          <div className="card">
            1- if you don't have an international payment card such as Visa,
            Master Card, Amex etc. we can get one for you <br />
            this is included in premium package
            <br />
            2- For each upload there is a 10 days pending to make sure the music
            is not covered or copyrighted <br />
            3- The music you upload has to be in 320 quality without a title{" "}
            <br />
            4- the images need to be 600 to 600 <br />
            5- If everything goes fine we will get the copyright for you so no
            one else could upload your music to any of the music or streaming
            applications and websites
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 130px;
  .card {
    border: 1px solid lightgray;
    padding: 20px;
    margin: 20px;
  }
`;
