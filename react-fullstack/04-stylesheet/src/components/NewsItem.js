import React from "react";
import styled, { css } from "styled-components";

const ListItem = styled.li`
  border-top: 1px solid #eee;
  &:last-child {
    border-bottom: 1px solid #eee;
  }

  .list-item-link {
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    text-decoration: none;
    color: #000;
    transition: all 0.1s;

    &:hover {
      background-color: #eeeeee55;
    }

    .thumbnail {
    }
  }
`;

const NewsItem = () => {};
