import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx';

import { useSelector } from 'react-redux';

const ProfessorDetail = memo(() => {
    const {profno} = useParams();

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
        const index = data.item.findIndex(element => element.profno === parseInt(profno));

        setOrigin({
            name: data.item[index].name,
            userid: data.item[index].userid,
            position: data.item[index].position,
            sal: data.item[index].sal,
            hiredate: data.item[index].hiredate,
            comm: data.item[index].comm,
            deptno: data.item[index].deptno
        });
    }, [data,profno]);

    return (
        <>
            <Spinner visible={loading} />
            {error ? (
                <ErrorView error={error} />
            ) : (
                <form>
                    <TableEx>
                        <colgroup>
                            <col width="120" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>교수이름</th>
                                <td className='inputWrapper'>{origin.name}</td>
                            </tr>
                            <tr>
                                <th>교수아이디</th>
                                <td className='inputWrapper'>{origin.userid}</td>
                            </tr>
                            <tr>
                                <th>직급</th>
                                <td className='inputWrapper'>{origin.position} </td>
                            </tr>
                            <tr>
                                <th>급여</th>
                                <td className='inputWrapper'>{origin.sal}</td>
                            </tr>
                            <tr>
                                <th>입사일</th>
                                <td className='inputWrapper'>
                                    {dayjs(origin.hiredate).format('YYYY-MM-DD')}
                                </td>
                            </tr>
                            <tr>
                                <th>수수료</th>
                                <td className='inputWrapper'>{origin.comm}</td>
                            </tr>
                            <tr>
                                <th>학과번호</th>
                                <td className='inputWrapper'>{origin.deptno}</td>
                            </tr>
                        </tbody>
                    </TableEx>
                </form>
            )}
        </>
    );
});

export default ProfessorDetail;


