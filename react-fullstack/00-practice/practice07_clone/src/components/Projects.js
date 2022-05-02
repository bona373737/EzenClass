import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  width: 90%;
  margin: 50px auto;

  h1 {
    font-size: var(--font-size-middle);
    letter-spacing: 5px;
    margin-bottom: 50px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-gray-light);
  }
  .project-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .project-list {
      position: relative;
      width: 23%;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
      .img-title {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px;
        background-color: black;
        color: white;
        font-size: var(--font-size-small);
      }
    }
  }
  @media screen and (max-width: 900px) {
    .project-wrap .project-list {
      width: 44%;
    }
  }
  @media screen and (max-width: 700px) {
    .project-wrap .project-list {
      width: 90%;
      margin: auto;
      margin-bottom: 20px;
    }
  }
`;

const Projects = ({ items }) => {
  return (
    <ProjectsContainer>
      <h1>Projects</h1>
      <ul className="project-wrap">
        {items.map((v, i) => {
          return (
            <li className="project-list" key={i}>
              <img
                src={process.env.PUBLIC_URL + "/assets/" + v.img}
                alt="projectImg"
              />
              <div className="img-title">{v.subject}</div>
            </li>
          );
        })}
      </ul>
    </ProjectsContainer>
  );
};
export default Projects;
