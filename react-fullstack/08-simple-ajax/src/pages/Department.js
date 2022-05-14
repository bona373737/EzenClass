import React from "react";
import Spinner from "../components/Spinner";
import axios from "axios";

const Department = () => {
  //현재 ajax가 데이터 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = React.useState(false);
  //화면에 표시할 상태값(ajax 연동결과로 받아온 json) ->초기값을 빈 배열로 정의
  const [department, setDepartment] = React.useState([]);
  //검색키워드
  const [keyword, setKeyword] = React.useState("");
  //삭제할 항목에 대한 id값을 저장하기 위한 상태값
  const [dropId, setDropId] = React.useState(-1);
  //수정할 항목에 대한 id값을 저장하기위한 상태값
  const [updateId, setUpdateId] = React.useState(-1);

  //페이지가 마운트됬을때 실행할 hook
  React.useEffect(() => {
    //ajax로딩 시작을 알림
    setLoading(true);
    (async () => {
      try {
        const response = await axios.get("  http://localhost:3001/department", {
          params: keyword ? { dname: keyword } : null,
        });
        // const response = await axios.get(
        //   `http://localhost:3001/department?dname=${keyword}`
        // );
        // const response = await axios.get("  http://localhost:3001/department", {
        //   params: { dname: keyword }
        // });
        //컴포넌트 성능향상을 위한 함수형 업데이트
        setDepartment((dapartment) => response.data);
      } catch (e) {
        console.log(e);
        alert("Ajax연동 실패");
      }
    })();
  }, [keyword]);

  // //검색어 input에 연결할 참조변수
  // const myKeywordInput = React.useRef();
  // //검색버튼 클릭이벤트
  // const onButtonClick = React.useCallback((e) => {
  //   setKeyword(myKeywordInput.current.value);
  // }, []);

  const onButtonClick = React.useCallback((e) => {
    e.preventDefault();

    setKeyword(e.currentTarget.keyword.value);
  });

  //form에서 submit이벤트가 발생할 때 호출될 이벤트 핸들러
  //성능최적화를 위해 useCallback()적용함
  const onDepartmentSave = React.useCallback((e) => {
    e.preventDefault();

    const dname = e.currentTarget.dname.value;
    const loc = e.currentTarget.loc.value;

    (async () => {
      let json = null;
      try {
        const response = await axios.post(
          "  http://localhost:3001/department",
          { dname: dname, loc: loc }
        );
        console.log(response);
        json = response.data;
      } catch (e) {
        console.error(e);
      }

      if (json != null) {
        const addArr = [json];
        setDepartment((department) => department.concat(addArr));
      }
    })();
  }, []);

  //삭제하기 버튼이 클릭되었을때 호출될 이벤트헨들러
  const onDeleteClick = React.useCallback((e) => {
    const current = e.currentTarget;
    //클릭된 자신에게 숨겨놓은 data.id값을 추출
    const id = parseInt(current.dataset.id);
    setDropId(id);
  }, []);

  //dropId가 변경 되었을때 실행할 Hook
  //id가 일치하지 않는 항목만 filter로 걸러내어 상태값 갱신함
  React.useEffect(() => {
    if (dropId > -1) {
      setDepartment((department) =>
        department.filter((v, i) => v.id !== dropId)
      );

      setLoading(true);

      setTimeout(() => {
        (async () => {
          try {
            await axios.delete(`http://localhost:3001/department/${dropId}`);
          } catch (e) {
            console.error(e);
            alert("ajax연동 실패");
          } finally {
            setLoading(false);
          }
        })();
      }, 1000);

      setDropId(-1);
    }
  }, [dropId]);

  //수정하기 버튼이 클랙되었을때 호출될 이벤트 헨들러
  const onUpdateClick = React.useCallback((e) => {
    e.preventDefault();
    //수정할 항목에 대한 인덱스 번호를 상태값으로 설정한다.
    setUpdateId(parseInt(e.currentTarget.dataset.id));
  }, []);

  //수정사항 저장버튼이 클릭되었을때 호출될 이벤트 헨들러
  const onUpdateSubmit = React.useCallback((e) => {
    e.preventDefault();
    //이벤트가 발생한 form요소 취득
    const current = e.target;
    console.log(current);
    //form요소 내의 input요소들을 name속성값으로 접그하여 입력값 얻어오기
    const id = current.id.value;
    const dname = current.dname.value;
    const loc = current.loc.value;

    //ajax로딩 시작을 알림..로딩바 활성화를 위한 상태값
    setLoading(true);

    let json = null;
    //백엔드에 데이터가 수정됬음을 알린다.
    (async () => {
      try {
        const response = await axios.put(
          `http://localhost:3001/department/${id}`,
          { dname: dname, loc: loc }
        );
        json = response.data;
      } catch (e) {
        console.error(e);
        alert("ajax 연동 실패");
      } finally {
        setLoading(false);
      }
      
      if (json !== null) {
        //함수형 업데이트
      console.log(json);

      setDepartment((department) => {
        //원본상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
        const find = department.findIndex((v, i) => v.id === json.id);
        //기존값의 index번호 맞게 수정데이터를 끼워 넣어주기
        department.splice(find, 1, json);
        //수정된 원본 배열을 리턴한다.
        return department;
      });
    }
  })();
    // 상태변수를 되돌린다.
    setUpdateId(-1);
  }, []);

  return (
    <div>
      <Spinner />
      <h2>학과목록</h2>
      <hr />

      <form onSubmit={onDepartmentSave}>
        <div>
          <label htmlFor="dname">학과:</label>
          <input type="text" name="dname" id="dname" />
        </div>
        <div>
          <label htmlFor="loc">위치:</label>
          <input type="text" name="loc" id="loc" />
        </div>
        <button type="sumit">저장하기</button>
      </form>
      <hr />

      {/* <form>
        <input type="text" name="keyword" ref={myKeywordInput}></input>
        <button type="button" onClick={onButtonClick}>
          검색
        </button>
      </form> */}
      <form onSubmit={onButtonClick}>
        <input type="text" name="keyword"></input>
        <button type="submit">검색</button>
      </form>
      <hr />

      <form onSubmit={onUpdateSubmit}>
        <table border="1">
          <thead>
            <tr>
              <th>학과번호</th>
              <th>학과명</th>
              <th>학과위치</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {department.length > 0 ? (
              department.map((item, index) => {
                return (
                  <tr kye={item.id}>
                    {updateId === item.id ? (
                      <>
                        <td>
                          <input
                            type="hidden"
                            name="id"
                            defaultValue={item.id}
                          />
                          {item.id}
                        </td>
                        <td>
                          <input type="text" name="dname" defaultValue={item.dname}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            name="loc"
                            defaultValue={item.loc}
                          />
                        </td>
                        <td colSpan="2">
                          <button type="submit">수정사항 저장</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{item.id}</td>
                        <td>{item.dname}</td>
                        <td>{item.loc}</td>
                        <td>
                          <button
                            type="button"
                            data-id={item.id}
                            onClick={onUpdateClick}
                          >
                            수정하기
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            data-id={item.id}
                            onClick={onDeleteClick}
                          >
                            삭제하기
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" align="center">
                  검색결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default React.memo(Department);
