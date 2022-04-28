import React from "react";
import styled from "styled-components";
import NewsData from "../NewsData";
import NewItem from "./NewsItem";

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const NewsList = () => {
  console.clear();
  return (
    <div>
      <ListContainer>
        {NewsData.map((v, i) => {
          return <NewItem key={i} item={v} />;
        })}
      </ListContainer>
    </div>
  );
};
export default NewsList;
