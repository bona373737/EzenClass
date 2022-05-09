import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/img/tablesetting2.jpg";

const AboutContainer = styled.div`
  .about-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 100px auto;
    padding: 0 50px;
    max-width: 1500px;

    img {
      width: 50%;
      height: 30%;
      opacity: 0.8;
    }

    .about-desc {
      text-align: center;
      padding: 0 20px;
      h1 {
        font-size: var(--font-size-large);
        margin: 30px 0;
        letter-spacing: 5px;
      }
      h4 {
        font-size: var(--font-size-middle);
        margin: 20px;
        letter-spacing: 5px;
      }
      p {
        text-align: left;
        font-size: var(--font-size-small);
        margin: 30px;
        line-height: 35px;

        &:last-child {
          opacity: 0.5;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .about-wrap {
      flex-direction: column;

      img {
        display: none;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <div className="about-wrap">
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
