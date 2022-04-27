import React from "react";
import styled, { css } from "styled-components";

//style정의된 ul태그
const MyGridContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 1024px;
  border: 5px solid #cc0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
//style정의된 li태그
const MyGridItem = styled.li`
  //props로 전달 받은 값으로 width값 동적설정하기
  /* width: ${function (props) {
    return props.width;
  }}; */
  width: ${(props) => props.width};
`;
//style정의된 div태그
const MyBox = styled.div`
  border: 3px dotted #000;
  background-color: #eee;
  height: 100px;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  //props로 전달받은 값으로 color값 설정하기
  color: ${(props) => props.color || "black"};
  &:hover {
    transform: scale(1.05, 1.05), rotate(-10deg);
    background-color: ${(props) => props.color || "#eeeeee"};
    color: #fff;
  }

  //props값에 대한 조건절을 처리하는 함수
  ${(props) =>
    props.number % 2 === 1 &&
    css`
      font-weight: bold;
      font-style: italic;
      text-decoration: underline;
    `}
`;

const StyledComponent = () => {
  const myColors = [
    "red",
    "green",
    "blue",
    "purple",
    "orange",
    "yellow",
    "pink",
  ];

  //배열전체를 100으로 봤을때 하나당 몇%인지 계산
  const myWidth = 100 / myColors.length + "%";

  return (
    <div>
      <h2> StyledComponent </h2>

      <h3>단순 태그처럼 사용</h3>
      <MyGridContainer>
        <MyGridItem width={`30%`}>
          <MyBox>Item1</MyBox>
        </MyGridItem>
        <MyGridItem width={`30%`}>
          <MyBox>Item2</MyBox>
        </MyGridItem>
        <MyGridItem width={`30%`}>
          <MyBox>Item3</MyBox>
        </MyGridItem>
        <MyGridItem width={`30%`}>
          <MyBox>Item4</MyBox>
        </MyGridItem>
        <MyGridItem width={`30%`}>
          <MyBox>Item5</MyBox>
        </MyGridItem>
      </MyGridContainer>

      <h3>배열 원소를 활용한 컴포넌트 사용</h3>
      <MyGridContainer>
        {myColors.map((item, index) => {
          return (
            <MyGridItem key={index} width={myWidth}>
              <MyBox color={item} number={index}>
                {item}
              </MyBox>
            </MyGridItem>
          );
        })}
      </MyGridContainer>
    </div>
  );
};
export default StyledComponent;
