import React, { memo, useCallback, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx';

import regexHelper from '../libs/RegexHelper';

import {useSelector, useDispatch} from 'react-redux';
import {postItem} from '../slices/ProfessorSlice';
import { selectDeptnoList } from '../slices/DepartmentSlice';

const ProfessorAdd = memo(() => {
    //데이터 추가 후 목록으로 돌아가기 위한 페이지 강제이동 함수
    const navigate = useNavigate();
    
   const  = useAxios("http://localhost:3001/department/selectDeptnoList").data.item


    //리덕스관련 초기화
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state)=>state.ProfessorSlice);
    const deptnoList = useSelector((state)=>state.DepartmentSlice).data?.item;
    
    // useEffect(()=>{
    //     dispatch(selectDeptnoList())
    // },[dispatch])



    //form의 submit버튼이 눌러졌을때 호출될 이벤트 핸들러
    const onSubmit = useCallback((e)=>{
        e.preventDefault();

        const current = e.target;

        try {
            regexHelper.value(current.name, '교수이름을 입력하세요');
            regexHelper.value(current.userid, '아이디를 입력하세요');
            regexHelper.engNum(current.userid, '아이디는 영문,숫자만 가능합니다.')
            regexHelper.value(current.position, '직급을 선택하세요');
            regexHelper.value(current.hiredate, '입사일을 입력하세요');
            regexHelper.value(current.sal, '급여를 입력하세요');
            regexHelper.num(current.sal, '급여는 숫자입력만 가능합니다.')
            regexHelper.num(current.comm, '수수료는 숫자입력만 가능합니다.')
            regexHelper.value(current.deptno, '학과번호를 입력하세요');
            regexHelper.num(current.deptno, '학과번호는 숫자입니다.');

        } catch (e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }

        dispatch(postItem({
            name: current.name.value,
            userid: current.userid.value,
            position: current.position.value,
            sal: current.sal.value,
            hiredate: current.hiredate.value,
            comm: current.comm.value,
            deptno: current.deptno.value

        })).then(()=>{
            navigate("/");
        })
    },[dispatch,navigate]);

    return (
        <>
            <Spinner visible={loading}/>   

            {error? (
                <ErrorView error={error}/>
            ):(deptnoList && 
                <form onSubmit={onSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width="120"/>
                            <col/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>교수이름</th>
                                <td className='inputWrapper'><input className='field' type="text" name="name"/></td>
                            </tr>
                            <tr>
                                <th>교수아이디</th>
                                <td className='inputWrapper'><input className='field' type="text" name="userid"/></td>
                            </tr>
                            <tr>
                                <th>직급</th>
                                <td style={{textAlign:'left'}}>
                                    <input  type="radio" id="position" name="position" value="교수"/>
                                    <label htmlFor="position">교수</label>
                                    <input  type="radio" id="position" name="position" value="부교수"/>
                                    <label htmlFor="position">부교수</label>
                                    <input  type="radio" id="position" name="position" value="조교수"/>
                                    <label htmlFor="position">조교수</label>
                                    <input  type="radio" id="position" name="position" value="전임강사"/>
                                    <label htmlFor="position">전임강사</label>
                                
                                </td>
                            </tr>
                            <tr>
                                <th>급여</th>
                                <td className='inputWrapper'><input className='field' type="text" name="sal"/></td>
                            </tr>
                            <tr>
                                <th>입사일</th>
                                <td className='inputWrapper'>
                                    <input className='field' type="date" name="hiredate"/>
                                </td>
                            </tr>
                            <tr>
                                <th>수수료</th>
                                <td className='inputWrapper'><input className='field' type="text" name="comm"/></td>
                            </tr>
                            <tr>
                                <th>학과번호</th>
                                <td className='inputWrapper'>
                                    <select className='field' name="deptno">
                                        <option>--학과번호--</option>
                                        {
                                            deptnoList.map((v,i)=>{
                                                return <option key={i}>{v}</option>
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </TableEx>

                    <div style={{textAlign:'center'}}>
                        <button type="submit">저장하기</button>
                    </div>
                </form>
            )}
        </>
    );
});

export default ProfessorAdd;