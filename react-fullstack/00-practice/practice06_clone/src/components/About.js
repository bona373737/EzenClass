import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/img/tablesetting2.jpg";

const AboutContainer = styled.div``;

const About = () => {
  return (
    <AboutContainer>
      <div className="about-content">
        <img src={aboutImg} alt="tablesetting2" />
        <div className="about-desc">
          <h1>About Catering</h1>
          <h4>Tradition since 1889</h4>
          <p>
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
            sit amet, consectetur adipiscing elit consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.We only use <span> seasonal </span>ingredients.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod temporincididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </AboutContainer>
  );
};
export default About;
