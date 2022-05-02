import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 90%;
  margin: auto;

  h1 {
    font-size: var(--font-size-middle);
    letter-spacing: 5px;
    padding: 20px 0;
    border-bottom: 1px solid var(--color-gray-light);
  }
  p {
    width: 100%;
    font-size: var(--font-size-small);
    padding: 30px 0;
  }
  .about-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 0;

    .about-item {
      width: 23%;
      img {
        width: 100%;
      }
      .member-name {
        font-size: var(--font-size-middle);
        font-weight: bold;
        padding: 15px 0;
      }
      .member-position {
        color: var(--color-gray-dark);
        padding: 15px 0;
      }
      .member-desc {
        line-height: 30px;
      }
      button {
        width: 100%;
        padding: 15px 0;
        font-size: var(--font-size-small);
        border: none;
        &:hover {
          background-color: var(--color-gray-dark);
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .about-content .about-item {
      width: 44%;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 700px) {
    .about-content .about-item {
      width: 90%;
      margin: auto;
      margin-bottom: 30px;
    }
  }
`;

const About = ({ items }) => {
  return (
    <AboutContainer>
      <h1>About</h1>
      <p>{items.content}</p>
      <ul className="about-content">
        {items.member.map((v, i) => {
          return (
            <li className="about-item" key={i}>
              <img src={process.env.PUBLIC_URL + "/assets/" + v.img} alt="" />
              <p className="member-name">{v.name}</p>
              <p className="member-position">{v.position}</p>
              <p className="member-desc">{v.desc}</p>
              <button>Contact</button>
            </li>
          );
        })}
      </ul>
    </AboutContainer>
  );
};
export default About;
