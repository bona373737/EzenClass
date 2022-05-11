import React from "react";
import styled from "styled-components";
import axios from "axios";
import NewsItem from "../components/NewsItem";

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

const News = () => {
  //화면에 표시할 상태값(ajsax연동결과로 받아올 json을 담을 빈배열준비)
  const [newsList, setNewsList] = React.useState([]);

  // 페이지가 처음 열렸을때 실행할 HOOK
  React.useEffect(() => {
    //즉시실행함수 형태로 (async()=>[])();
    (async () => {
      let json = null;
      try {
        const response = await axios.get("http://localhost:3001/news");
        // console.log(response);
        json = response.data;
        console.log(json);
      } catch (e) {
        console.log(e);
        alert("Ajax 연동 실패");
      }

      //ajax 연동결과가 있다면 그 결과를 상태값에 적용함
      if (json != null) {
        setNewsList(json);
      }
    })();
  }, []);

  return (
    <div>
      {/* 배열 요소 1개의 구성-> {author:'매일경제',title:'', image:'', .....} */}
      <ListContainer>
        {newsList.map((v, i) => (
          <NewsItem key={i} item={v} />
        ))}
      </ListContainer>
    </div>
  );
};
export default News;
