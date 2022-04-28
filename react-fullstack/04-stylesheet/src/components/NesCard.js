import React from "react";
import styled from "styled-components";
import NewsData from "../NewsData";

const CardContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 30px;

  .card-item {
    width: 320px;
    flex: none;
    border: 1px solid #d5d5d5;
    margin: 10px 5px;

    .list-item-link {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #000;
      transition: all 0.1s;

      &:hover {
        background-color: #eeeeee555;
      }

      .thumbnail {
        width: 100%;
        height: 150px;
        display: block;
        object-fit: cover;
        flex: none;
      }

      .content {
        flex: 0 1 auto;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        padding: 10px 15px;
        background-color: #ff01;

        h3 {
          background-color: #f0f1;
          box-sizing: border-box;
          font-size: 18px;
          font-weight: bold;
          margin: 0;
          margin-bottom: 10px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        p {
          background-color: #0601;
          font-size: 14px;
          margin: 0;
          margin-bottom: 8px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        ul {
          background-color: #0061;
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            display: inline-block;
            font-size: 12px;

            &:first-child::after {
              content: "|";
              display: inline-block;
              color: #555;
              padding: 0 5px;
            }
          }
        }
      }
    }
  } //styled ul end
`;

const NewsCard = () => {
  console.clear();
  return (
    <div>
      <CardContainer>
        {NewsData.map((v, i) => {
          const { url, image, title, description, autor, datetime } = v;
          return (
            <li className="card-item" key={i}>
              <a
                className="list-item-link"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <img className="thumbnail" src={image} alt="new_image" />
                <div className="content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul>
                    <li>{autor}</li>
                    <li>{new Date(datetime).toLocaleString()}</li>
                  </ul>
                </div>
              </a>
            </li>
          );
        })}
      </CardContainer>
    </div>
  );
};
export default NewsCard;
