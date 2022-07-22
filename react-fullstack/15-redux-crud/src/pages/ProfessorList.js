import React, { memo, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { getList, deleteItem } from '../slices/ProfessorSlice';

const ControlContainer = styled.form`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;

    .controll {
        margin-right: 5px;
        display: inline-block;
        font-size: 16px;
        padding: 7px 10px 5px 10px;
        border: 1px solid #ccc;
    }

    .clickable {
        background-color: #fff;
        color: #000;
        text-decoration: none;
        cursor: pointer;
        
        &:hover {
        background-color: #06f2;
        }

        &:active {
            transform: scale(0.9, 0.9);
        }
    }
`;

const Pagenation = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
    display: flex;
    justify-content: center;

    a {
        color: black;
        padding: 8px 12px;
        text-decoration: none;
        transition: background-color .3s;
        margin: 0 5px;

        &.current-page {
            background-color: #116688;
            color: white;
            border-radius: 5px;
        }

        &.disabled {
            color: #ccc;
            cursor: not-allowed;
        }

        &:hover:not(.current-page) {
            background-color: #ddd;
            border-radius: 5px;
        }
    }
`;

const ProfessorList = memo(() => {

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.ProfessorSlice);

    /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
    const navigate = useNavigate();

    /** QueryString 문자열 얻기 */
    // ex) http://localhost:3000?query=풀스택&rows=10&page=3
    const { query, rows, page } = useQueryString({
        query: '',
        rows: 10,
        page: 1
    });

    /** 목록수 드롭다운에 접근할 참조변수 */
    const refRowsDropdown = useRef();

    /** 입력요소에 접근할 참조변수 */
    const refTextInput = useRef();

    /** 최초 마운트 혹은 QueryString이 변경될 때 마다 hook -> 리덕스를 통해 목록을 조회한다. */
    React.useEffect(() => {
        dispatch(getList({
            query: query,
            rows: rows,
            page: page
        }));

        refRowsDropdown.current.value = rows;
        refTextInput.current.value = query;
    }, [dispatch, query, rows, page]);

    /** 검색 이벤트 */
    const onSearchSubmit = useCallback(e => {
        e.preventDefault();
        const dropdown = refRowsDropdown.current;
        const input = refTextInput.current;
        navigate(`/?query=${input.value}&rows=${dropdown.value}`);
    }, [navigate]);

    /** 수정 버튼 클릭 이벤트 처리 --> 수정 페이지로 이동. 수정 대상에 대한 id를 path파라미터로 전달함. */
    const onEditClick = useCallback(e => {
        e.preventDefault();
        const current = e.target;
        const profno = current.dataset.profno;
        navigate(`/professor_edit/${profno}`);
    }, [navigate]);

    // console.log(data)

    /** 삭제 버튼 클릭 이벤트 처리 --> 리덕스를 통해 삭제 처리 --> data값이 갱신되므로 화면에 자동 반영된다. */
    const onDeleteClick = useCallback(e => {
        e.preventDefault();

        const current = e.target;

        if (window.confirm(`정말 ${current.dataset.name}(을)를 삭제하시겠습니까?)`)) {
            dispatch(deleteItem({
                profno: current.dataset.profno
            }));
        }
    }, [dispatch]);

    /** 리스트 클릭시 상세페이지로 이동 */
    const onMoveDetail = useCallback(e=>{
        const profno = e.currentTarget.dataset.profno;
        navigate(`/professor_detail/${profno}`)
    },[navigate]);

    return (
        <div>
            <Spinner visible={loading} />

            <ControlContainer onSubmit={onSearchSubmit}>
                <select name="rows" className="controll" onChange={onSearchSubmit} ref={refRowsDropdown}>
                    <option value="10">10개씩 보기</option>
                    <option value="20">20개씩 보기</option>
                    <option value="30">30개씩 보기</option>
                </select>
                <input type="text" className="controll" ref={refTextInput} />
                <button type="submit" className="controll clickable">검색</button>
                <NavLink to="professor_add" className="controll clickable">교수정보 추가하기</NavLink>
            </ControlContainer>

            {error ? (
                <ErrorView error={error} />
            ) : data && (
                <>
                    <Table>
                        <thead>
                            <tr>
                                <th>교수번호</th>
                                <th>성명</th>
                                <th>아이디</th>
                                <th>직급</th>
                                <th>급여</th>
                                <th>입사일</th>
                                <th>comm</th>
                                <th>학과번호</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.item.length > 0 ? (
                                data.item.map((item, index) => {
                                    return (
                                        <tr key={item.profno}>
                                            {/* 데이터를 텍스트로 출력 */}
                                            <td onClick={onMoveDetail} data-profno={item.profno}>{item.profno}</td>
                                            <td>{item.name}</td>
                                            <td>{item.userid}</td>
                                            <td>{item.position}</td>
                                            <td>{item.sal}</td>
                                            <td>{dayjs(item.hiredate).format('YYYY-MM-DD')}</td>
                                            <td>{item.comm}</td>
                                            <td>{item.deptno}</td>
                                    
                                            <td>
                                                <button type='button' data-profno={item.profno} onClick={onEditClick}>
                                                    수정하기
                                                </button>
                                            </td>
                                            <td>
                                                <button type='button' data-profno={item.profno} data-name={item.name} onClick={onDeleteClick}>
                                                    삭제하기
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan='9' align='center'>
                                        검색결과가 없습니다.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>

                    {data && (
                        <Pagenation>
                            {data.pagenation.prevGroupLastPage > 0 ? (
                                <li><NavLink to={`/?query=${query}&rows=${rows}&page=${data.pagenation.prevGroupLastPage}`}>&laquo;</NavLink></li>
                            ) : (
                                <li><NavLink to="#" className='disabled'>&laquo;</NavLink></li>
                            )}

                            {(() => {
                                const li = [];
                                const start = data.pagenation.groupStart;
                                const end = data.pagenation.groupEnd + 1;
                                for (let i = start; i < end; i++) {
                                    if (i === data.pagenation.nowPage) {
                                        li.push(<li key={i}><NavLink to="#" className='current-page'>{i}</NavLink></li>)
                                    } else {
                                        li.push(<li key={i}><NavLink to={`/?query=${query}&rows=${rows}&page=${i}`}>{i}</NavLink></li>);
                                    }
                                }

                                return li;
                            })()}

                            {data.pagenation.nextGroupFirstPage > 0 ? (
                                <li><NavLink to={`/?query=${query}&rows=${rows}&page=${data.pagenation.nextGroupFirstPage}`}>&raquo;</NavLink></li>
                            ) : (
                                <li><NavLink to="#" className='disabled'>&raquo;</NavLink></li>
                            )}
                        </Pagenation>
                    )}

                </>
            )}
        </div>
    );
});

export default ProfessorList;


// import React, { memo, useCallback, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import { NavLink, useNavigate} from 'react-router-dom';
// import {useQueryString} from '../hooks/useQueryString';

// import Spinner from '../components/Spinner';
// import ErrorView from '../components/ErrorView';
// import Table from '../components/Table';

// import {useSelector, useDispatch} from 'react-redux';
// import {deleteItem, getList} from '../slices/DepartmentSlice';

// const ControlContainer = styled.form`
//     position: sticky;
//     top: 0;
//     background-color: #fff;
//     border-top: 1px solid #eee;
//     border-bottom: 1px solid #eee;
//     padding: 10px 0;

//         .controll{
//             margin-left: 5px;
//             display: inline-block;
//             font-size: 16px;
//             padding: 7px 10px 5px 10px;
//             border: 1px solid #ccc;
//         }

//         .clickable{
//             background-color: #fff;
//             color: #000;
//             text-decoration: none;
//             cursor: pointer;
//             &:hover{
//                 background-color: #06f2;
//             }
//             &:active{
//                 transform:scale(0.9, 0.9);
//             }
//         }
// `;

// const Pagenation = styled.ul`
//     list-style: none;
//     padding: 0;
//     margin: 20px 0;
//     display: flex;
//     justify-content: center;

//     a{
//         color: black;
//         padding: 8px 12px;
//         text-decoration: none;
//         transition: background-color 3s;
//         margin: 0 5px;

//         &.current-page{
//             background-color: #116688;
//             color: white;
//             border-radius: 5px;
//         }
//         &.disabled{
//             color: #ccc;
//             cursor: not-allowed;
//         }

//         &:hover:not(.current-page){
//             background-color: #ddd;
//             border-radius: 5px;
//         }
//     }
// `;


// const DepartmentList = memo(() => {
//     /**리덕스 관련 초기화 */
//     const dispatch = useDispatch();
//     const {data, loading, error} = useSelector((state)=>state.DepartmentSlice);

//     /**페이지 강제이동을 처리하기 우한 navigate함수 */
//     const navigate = useNavigate();
    
//     /**QueryString 문자열 얻기_검색어,페이지번호 */
//     //ex) http://localhost:3000?query=풀스택&rows=10&page=3
//     const {query,rows,page} = useQueryString({
//         query:'',
//         rows: 10,
//         page:1
//     })
    
//     /**목록수 드롭다운에 접근할 참조별수 */
//     const refRowsDropdown = useRef();
    
//     /**입력요소에 접근할 참조변수 */
//     const refTextInput = useRef();
    
//     /**페이지 마운트와 동시에 실행되는 hook_리덕스를 통해 목록을 조회한다. */
//     useEffect(()=>{
//         dispatch(getList({
//             query:query,
//             rows:rows,
//             page:page
//         }));
        
//         refRowsDropdown.current.value = rows;
//         refTextInput.current.value = query;
//     },[dispatch,rows,query,page])
//     // console.log(data);
    
//     /**검색이벤트 */
//     const onSearchSubmit = useCallback(e=>{
//         e.preventDefault();
//         const dropdown = refRowsDropdown.current;
//         const input = refTextInput.current;
//         navigate(`/?query=${input.value}&rows=${dropdown.value}`);
//     },[navigate]);

//     /**수정버튼 클릭이벤트 */
//     //수정페이지로 이동, 수정대상에 대한 id를 path파라미터로 전달함
//     const onEditClick = useCallback(e=>{
//         e.preventDefault();
//         const current = e.target;
//         const deptno = current.dataset.deptno;
//         navigate(`/department_edit/${deptno}`);
//     },[navigate]);

//     /**삭제버튼 클릭이벤트 */
//     //백엔드가 아닌 프론트의 리덕스를 통해 삭제처리_data값이 갱신되므로 화면에 자동반영된다
//     //(삭제기능은 백엔드에서 수정적용된 데이터를 select해서 응답데이터를 전달해주던 방법과 다르게 처리 필요)
//     const onDeleteClick = useCallback(e=>{
//         e.preventDefault();
//         const current = e.target;
//         if(window.confirm(`정말 ${current.dataset.dname}을 삭제하시겠습니까?`))
//         dispatch(deleteItem({
//             deptno:current.dataset.deptno
//         }));
//     },[dispatch]);

//     return (
//         <div>
//             <Spinner visible={loading}/>

//             <ControlContainer onSubmit={onSearchSubmit} >
//                 <select name='rows' className='controll' onChange={onSearchSubmit} ref={refRowsDropdown}>
//                     <option value='10'>10개씩 보기</option>
//                     <option value='20'>20개씩 보기</option>
//                     <option value='30'>30개씩 보기</option>
//                 </select>
//                 <input type="text" className="controll" ref={refTextInput} />
//                 <button type='submit' className='controll clickable' >검색</button>
//                 <NavLink to="department_add" className="controll clickable">학과정보 추가하기</NavLink>
//             </ControlContainer>

//             {
//                 error? (
//                     <ErrorView visible={loading}/>
//                 ): data && (
//                     <>
//                         <Table>
//                             <thead>
//                                 <tr>
//                                     <th>학과번호</th>
//                                     <th>학과명</th>
//                                     <th>학과위치</th>
//                                     <th>수정</th>
//                                     <th>삭제</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                             {data.item.length>0? (
//                                     data.item.map((item,index)=>{
//                                         return(
//                                             <tr key={item.deptno}>
//                                                 <td>{item.deptno}</td>
//                                                 <td>{item.dname}</td>
//                                                 <td>{item.loc}</td>
//                                                 <td>
//                                                     <button type='button' data-deptno={item.deptno} onClick={onEditClick}>
//                                                         수정하기
//                                                     </button>
//                                                 </td>
//                                                 <td>
//                                                     <button type='button' data-deptno={item.deptno} data-dname={item.dname} onClick={onDeleteClick}>
//                                                         삭제학기
//                                                     </button>
//                                                 </td>
//                                             </tr>
//                                         )
//                                     })
//                             ):(
//                                     <tr colSpan='5'align='center'>
//                                         검색결과가 없습니다.
//                                     </tr>
//                             )}
//                             </tbody>
//                         </Table>

//                         <Pagenation>
//                             {/* 이전페이지가 있다면 화살표 표시_화살표 클릭시 이전 페이지그룹의 마지막 페이지로 이동링크 */}
//                            {data.pagenation.prevGroupLastPage>0?(
//                                 <li><NavLink to={`/?query=${query}&rows=${rows}&page=${data.pagenation.prevGroupLastPage}`}>&laquo;</NavLink></li>
//                            ):(
//                                 <li><NavLink to='#' className='disabled'>&laquo;</NavLink></li>
//                            )} 

//                            {/*즉시실행함수_페이지 번호버튼 */}
//                             {(()=>{
//                                 const li = [];
//                                 const start = data.pagenation.groupStart;
//                                 const end = data.pagenation.groupEnd+1;
//                                 for(let i=start; i<end; i++){
//                                     if(i === data.pagenation.nowPage){
//                                         li.push(<li key={i}><NavLink to="#" className="current-page">{i}</NavLink></li>)
//                                     } else {
//                                         li.push(<li key={i}><NavLink to={`/?query=${query}&rows=${rows}&page=${i}`}>{i}</NavLink></li>)
//                                     }
//                                 }
//                                 return li;
//                             })()}

//                             {data.pagenation.nextGroupFirstPage >0 ? (
//                                 <li><NavLink to={`/?query=${query}&rows=${rows}&page=${data.pagenation.nextGroupFirstPage}`}>&raquo;</NavLink></li>
//                             ):(
//                                 <li><NavLink to="#" className="disabled">&raquo;</NavLink></li>
//                             )}

//                         </Pagenation>
//                     </>
//                 )
//             }
//         </div>
//     );
// });

// export default DepartmentList;