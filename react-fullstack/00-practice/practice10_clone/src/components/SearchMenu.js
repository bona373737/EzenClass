import React from 'react';
import styled from 'styled-components';

const SearchMenuContainer=styled.div`
  background-color: #0003;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
 
 .content-wrap{
   width: 100%;
    height: 400px;
    background-color: white;

    
    table{
    width: 1200px;
    margin: auto;

    th{
      height: 100px;
    }
    
    td{
      width: 600px;
      vertical-align: top;
    }
    .favtag span{
      color: #FF7C98;
    }
    input{
      background-color: #EFEFEF;
      border: none;
    }
    select{
      border: 1px solid #EFEFEF;
    }
    button{
      width: 150px;
      height: 40px;
      color: white;
      background-color: #FF7C98;
      border-radius: 20px;
      margin: auto;
    }
  }
}
  
`;

const SearchMenu = () => {
  return (
    <SearchMenuContainer>
      <div className="content-wrap">
      <table>
        <tbody>
        <tr>
          <td>
            <h6>제품명</h6>
            <form>
            <select name="" id="">
              <option value="">전체</option>
              <option value="">아이스크림</option>
              <option value="">아이스크림케이크</option>
              <option value="">음료</option>
              <option value="">커피</option>
              <option value="">디저트</option>
              <option value="">block pack</option>
              <option value="">ready pack</option>
            </select>
            <input type="text" />
            </form>
          </td>
          <td className='hashtag'>
            <h6>해시태그</h6>
            <div>
            <input type="text" />
            <div className="favtag">
            <p>자주찾는 해시태그</p>
            <span>#피카피카피카츄</span>
            <span>#피카츄초코바나나블라스트</span>
            <span>#쿨쿨잠만보밀키소다블라스트</span>
            <span>#고라파덕아이스크림콘</span>
            <span>#푸린아이스크림콘</span>
            <span>#포켓몬스터</span>
          </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <h6>알레르기 성분</h6>
            <form>
            <input type="checkbox" name="" id="" />계란
            <input type="checkbox" name="" id="" />대두
            <input type="checkbox" name="" id="" />돼지고기
            <input type="checkbox" name="" id="" />땅콩
            <input type="checkbox" name="" id="" />밀
            <input type="checkbox" name="" id="" />복숭아
            <input type="checkbox" name="" id="" />우유
            <input type="checkbox" name="" id="" />없음
            </form>
          </td>
        </tr>
        </tbody>
      <button> 검색 </button>
      </table>
      </div>
    </SearchMenuContainer>
  );
};

export default SearchMenu;