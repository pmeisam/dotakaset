import React from "react";
import styled from "styled-components";
import Music from "../components/SVGs/Music";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSpotify,
//   faYoutube,
//   faItunes,
// } from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <Wrapper>
      <div className="video-container">
        <div className="section-hero-banner__container">
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
            >
              <div>
                <h1>
                  Release <br />
                  <strong>
                    unlimited <br /> music
                  </strong>
                  <br /> everywhere.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          src="https://media.graphassets.com/68LSCpdkR2SAlpVWwxal"
        ></video>
      </div>

      <div className="home-content" data-aos="fade">
        <div className="section-stores">
          <img
            alt="Spotify"
            width=""
            height=""
            className="store-image"
            data-src="https://media.graphassets.com/odttmkzySEiDOy90nLD4"
            src="https://media.graphassets.com/odttmkzySEiDOy90nLD4"
            lazy="loaded"
          />
          <img
            alt="Apple Music"
            width=""
            height=""
            className="store-image"
            data-src="https://media.graphassets.com/SkNhHQWSS1Kd9ghGMYFL"
            src="https://media.graphassets.com/SkNhHQWSS1Kd9ghGMYFL"
            lazy="loaded"
          />
          <img
            alt="Amazon Music"
            width=""
            height=""
            className="store-image"
            data-src="https://media.graphassets.com/uSXNflJ8SAKWrROkcN8f"
            src="https://media.graphassets.com/uSXNflJ8SAKWrROkcN8f"
            lazy="loaded"
          />
          <img
            alt="Tidal"
            width=""
            height=""
            className="store-image"
            data-src="https://media.graphassets.com/55bNUonQ7KSgQeIK1UFw"
            src="https://media.graphassets.com/55bNUonQ7KSgQeIK1UFw"
            lazy="loaded"
          />
          <img
            alt="Pandora"
            width=""
            height=""
            className="store-image"
            data-src="https://media.graphassets.com/FEzmKHSle53OmdL7bHgA"
            src="https://media.graphassets.com/FEzmKHSle53OmdL7bHgA"
            lazy="loaded"
          />
          <img
            alt="TikTok"
            width=""
            height=""
            className="store-image"
            data-src="https://media.graphassets.com/kjbJmyuXSYWQPpSSZ7k3"
            src="https://media.graphassets.com/kjbJmyuXSYWQPpSSZ7k3"
            lazy="loaded"
          />
          <img
            alt="Vevo"
            width=""
            height=""
            className="store-image"
            data-src="https://media.graphassets.com/yYMLVuU0ROWUtKZmquCx"
            src="https://media.graphassets.com/yYMLVuU0ROWUtKZmquCx"
            lazy="loaded"
          />
        </div>
        <div>
          <div className="text-card">
            <h2>
              <span>
                <strong>Global</strong> Music Distribution.
              </span>
            </h2>
            <div>
              <div>
                <p>
                  Release your music to more global platforms than anywhere
                  else.{" "}
                </p>
                <p>
                  Get your tracks on major streaming platforms including
                  Spotify, Apple Music, Amazon, Deezer and more with our music
                  distribution services. Go viral on the biggest social channels
                  like TikTok, Instagram &amp; Facebook. Build a new global fan
                  base on international music stores.
                </p>
              </div>
            </div>
          </div>
          <Music />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .video-container {
    min-height: calc(100vh - 400px);
  }
  .section-hero-banner__container {
    position: relative;
    z-index: 2;
    max-width: 1580px;
    padding-top: 17.25rem;
    padding-bottom: 13.25rem;
    color: white;
  }
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    width: auto;
    min-width: 100%;
    height: auto;
    min-height: 100%;
    transform: translateX(-50%) translateY(-50%);
  }

  .section-stores {
    width: 100%;
    min-height: 15.25rem;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }

  .store-image {
    width: 100px;
    margin: 40px;
  }

  .home-content {
    width: 100%;
    background-color: white;
    padding-top: 1.875rem;
    padding-bottom: 6.25rem;
    z-index: 2;
    position: absolute;
  }

  .text-card {
    width: 500px;
    margin: 100px;
  }
`;
