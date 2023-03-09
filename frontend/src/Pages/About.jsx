import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function About() {
  return (
    <AboutPageWrapper>
      <p>
        Welcome to our music publishing website! Our platform is dedicated to
        helping independent artists like you get their music on popular
        streaming services like YouTube and Spotify. We believe that every
        artist should have the opportunity to share their talent with the world
        and connect with their audience on a global scale. Our team is made up
        of industry experts with years of experience in music publishing and
        distribution. We understand the challenges that artists face when trying
        to get their music noticed, which is why we've developed a user-friendly
        platform that makes the process easy and affordable. We work with
        artists of all genres, from up-and-coming musicians to established
        professionals. Our platform allows you to upload your music and
        distribute it to major streaming services like YouTube and Spotify. We
        handle all of the technical aspects of distribution, so you can focus on
        what you do best – creating music. In addition to distribution, we also
        provide a range of services to help promote your music and increase your
        visibility on streaming platforms. Our team can help you optimize your
        profile, create engaging content, and connect with your audience through
        social media. At our music publishing website, we're passionate about
        helping artists succeed. We believe that everyone deserves the
        opportunity to share their music with the world, and we're committed to
        making that a reality. Join us today and take the first step towards
        reaching a global audience.
      </p>
      <p>
        Want to know more about our services?{" "}
        <Link to="/support">Send us a message and we'll be happy to assist you.</Link>
      </p>
    </AboutPageWrapper>
  );
}

const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  p {
    width: 90%;
  }
`;
