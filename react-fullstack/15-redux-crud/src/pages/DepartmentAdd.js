import React, { memo, useCallback } from 'react';
import {useNavigate} from 'react-router-dom';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx';

import regexHelper from '../libs/RegexHelper';

import {useSelector, useDispatch} from 'react-redux';
import {postItem} from '../slices/DepartmentSlice';

const DepartmentAdd = memo(() => {
    //데이터 추가 후 목록으로 돌아가기 위한 페이지 강제이동 함수
    const navigate = useNavigate();
    
    //리덕스관련 초기화
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state)=>state.DepartmentSlice);

    //form의 submit버튼이 눌러졌을때 호출될 이벤트 핸들러
    const onSubmit = useCallback((e)=>{
        e.preventDefault();

        const current = e.target;

        //입력값에 대한 유효성검사
        try {
            regexHelper.value(current.dname, '학과이름을 입력하세요');
            regexHelper.minLength(current.dname, '학과이름은 최소 2글자 이상 입력해야 합니다.')
            regexHelper.maxLength(current.dname, '학과이름은 최대 20글자까지 입력 가능합니다.')

            regexHelper.value(current.loc, '학과위치을 입력하세요');
            regexHelper.minLength(current.loc, '학과위치은 최소 2글자 이상 입력해야 합니다.')
            regexHelper.maxLength(current.loc, '학과위치은 최대 20글자까지 입력 가능합니다.')
            
        } catch (e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }

        dispatch(postItem({
            dname: current.dname.value,
            loc: current.loc.value
        })).then(()=>{
            navigate("/");
        })
    },[dispatch,navigate]);

    return (
        <>
            <Spinner visible={loading}/>   

            {error? (
                <ErrorView error={error}/>
            ):(
                <form onSubmit={onSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width="120"/>
                            <col/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>학과이름</th>
                                <td className='inputWrapper'><input className='field' type="text" name="dname"/></td>
                            </tr>
                            <tr>
                                <th>학과위치</th>
                                <td className='inputWrapper'><input className='field' type="text" name="loc"/></td>
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

export default DepartmentAdd;