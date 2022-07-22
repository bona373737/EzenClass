import React, { memo, useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx';
import regexHelper from '../libs/RegexHelper';

import { useSelector, useDispatch } from 'react-redux';
import useAxios from 'axios-hooks';
import { putItem } from '../slices/ProfessorSlice';

const ProfessorEdit = memo(() => {
    const {profno} = useParams();
    const navigate = useNavigate();
    const [checked, setChecked] = useState("");

    const [{data:deptnoData,loading:deptnoLoading,error:deptnoError},refetch] = useAxios("http://localhost:3001/department/deptnolist")

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.ProfessorSlice);
    const [ origin, setOrigin] = useState({
        name: '',
        userid: '',
        position: '',
        sal: '',
        hiredate: '',
        comm: '',
        deptno: '',
    });

    useEffect(() => {
        const index = data.item.findIndex(e => e.profno === parseInt(profno));

        setOrigin({
            name: data.item[index].name,
            userid: data.item[index].userid,
            position: data.item[index].position,
            sal: data.item[index].sal,
            hiredate: data.item[index].hiredate,
            comm: data.item[index].comm,
            deptno: data.item[index].deptno
        });

        setChecked(data.item[index].position);


    }, [data,profno]);
    
    const onSubmit = useCallback((e) => {
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

        dispatch(putItem({
            profno:profno,
            name: current.name.value,
            userid: current.userid.value,
            position: current.position.value,
            sal: current.sal.value,
            hiredate: current.hiredate.value,
            comm: current.comm.value,
            deptno: current.deptno.value
        })).then(() => {
            navigate("/");
        });

    },[dispatch, profno, navigate]);

    return (
        <>
            <Spinner visible={deptnoLoading} />
            {error && deptnoError ? (
                <ErrorView error={error} />
            ) : (
                (checked && origin && deptnoData) &&(

                <form onSubmit={onSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width="120" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>교수이름</th>
                                <td className='inputWrapper'><input className='field' type="text" name="name" defaultValue={origin.name}/></td>
                            </tr>
                            <tr>
                                <th>교수아이디</th>
                                <td className='inputWrapper'><input className='field' type="text" name="userid" defaultValue={origin.userid}/></td>
                            </tr>
                            <tr>
                                <th>직급</th>
                                <td className='inputWrapper' style={{textAlign:'left'}}>
                                    <input  type="radio" id="position" name="position" value="교수" defaultChecked={checked === "교수"}/>
                                    <label htmlFor="position">교수</label>
                                    <input  type="radio" id="position" name="position" value="부교수" defaultChecked={checked === "부교수"}/>
                                    <label htmlFor="position">부교수</label>
                                    <input  type="radio" id="position" name="position" value="조교수" defaultChecked={checked === "조교수"}/>
                                    <label htmlFor="position">조교수</label>
                                    <input  type="radio" id="position" name="position" value="전임강사" defaultChecked={checked === "전임강사"}/>
                                    <label htmlFor="position">전임강사</label>
                                </td>
                            </tr>
                            <tr>
                                <th>급여</th>
                                <td className='inputWrapper'><input className='field' type="text" name="sal" defaultValue={origin.sal}/></td>
                            </tr>
                            <tr>
                                <th>입사일</th>
                                <td className='inputWrapper'>
                                    <input className='field' type="date" name="hiredate" defaultValue={dayjs(origin.hiredate).format('YYYY-MM-DD')}/>
                                </td>
                            </tr>
                            <tr>
                                <th>수수료</th>
                                <td className='inputWrapper'><input className='field' type="text" name="comm" defaultValue={origin.comm}/></td>
                            </tr>
                            <tr>
                                <th>학과번호</th>
                                <td className='inputWrapper'>
                                    <select className='field' name="deptno">
                                        {
                                            deptnoData.item.map((v,i)=>{
                                                return <option key={i}>{v}</option>
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </TableEx>

                    <div style={{ textAlign: 'center' }}>
                        <button type='submit'>저장하기</button>
                    </div>
                </form>
                )
            )}
        </>
    );
});

export default ProfessorEdit;



// import React, { memo, useCallback, useState, useEffect } from 'react';
// import { useNavigate, useParams} from 'react-router-dom';

// import Spinner from '../components/Spinner';
// import ErrorView from '../components/ErrorView';
// import TableEx from '../components/TableEx';
// import regexHelper from '../libs/RegexHelper';

// import {useSelector, useDispatch} from 'react-redux';
// import {putItem } from '../slices/DepartmentSlice'; 

// const DepartmentEdit = memo(() => {
//     //path파라미터에 포함된 id값 획득하기
//     const {deptno} = useParams();

//     const navigate= useNavigate();

//     //리덕스초기화
//     const dispatch = useDispatch();
//     const {data, loading, error} = useSelector(state=>state.DepartmentSlice);

//     const [origin, setOrigin] = useState({
//         dname:'',
//         loc:''
//     });

//     //페이지가 열림과 동시에 id값에 대한 데이터를 조회하여 리덕스 상태값에 반영한다.
//     //여기에서 e는 무엇??
//     useEffect(()=>{
        
//         const index = data.item.findIndex(e=>e.deptno === parseInt(deptno));

//         setOrigin({
//             dname: data.item[index].dname,
//             loc: data.item[index].loc
//         })
//     },[data, deptno]);


//     const onSubmit = useCallback((e)=>{
//         e.preventDefault();

//         const current = e.target;

//         //입력값에 대한 유효성검사
//         try {
//             regexHelper.value(current.dname, '학과이름을 입력하세요');
//             regexHelper.minLength(current.dname, '학과이름은 최소 2글자 이상 입력해야 합니다.')
//             regexHelper.maxLength(current.dname, '학과이름은 최대 20글자까지 입력 가능합니다.')

//             regexHelper.value(current.loc, '학과위치을 입력하세요');
//             regexHelper.minLength(current.loc, '학과위치은 최소 2글자 이상 입력해야 합니다.')
//             regexHelper.maxLength(current.loc, '학과위치은 최대 20글자까지 입력 가능합니다.')
            
//         } catch (error) {
//             window.alert(e.message);
//             e.field.focus();
//             return;
//         }

//         //리덕스를 통한 상태값 갱신_완료 후 목록페이지로 강제이동
//         dispatch(putItem({
//             deptno:deptno,
//             dname: current.dname.value,
//             loc: current.loc.value
//         })).then(()=>{
//             navigate("/");
//         })
//     },[dispatch,deptno,navigate]);

//     return (
//         <>
//             <Spinner visible={loading}/>   

//             {error? (
//                 <ErrorView error={error}/>
//             ):(
//                 <form onSubmit={onSubmit}>
//                     <TableEx>
//                         <colgroup>
//                             <col width="120"/>
//                             <col/>
//                         </colgroup>
//                         <tbody>
//                             <tr>
//                                 <th>학과이름</th>
//                                 <td className='inputWrapper'><input className='field' type="text" name="dname" defaultValue={origin?.dname}/></td>
//                             </tr>
//                             <tr>
//                                 <th>학과위치</th>
//                                 <td className='inputWrapper'><input className='field' type="text" name="loc" defaultValue={origin?.loc}/></td>
//                             </tr>
//                         </tbody>
//                     </TableEx>

//                     <div style={{textAlign:'center'}}>
//                         <button type="submit">저장하기</button>
//                     </div>
//                 </form>
//             )}
//         </>
//     );
// });

// export default DepartmentEdit;