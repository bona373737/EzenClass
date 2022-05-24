import React from 'react';

import Table from './Table';
import Spinner from './Spinner';
import ErrorView from '../components/ErrorView';

import {useSelector, useDispatch} from 'react-redux';
import { getAccidentList } from './slices/AccidentSlice';

const Accident = () => {
    let accidentSum = 0;
    let deathSum = 0;
    let injurySum = 0;

    const {data,loading, error} = useSelector((state)=>state.accident);
    const dispatch = useDispatch();

    const [year, setYear] = React.useState('');
 
    const onChangeYear =React.useCallback((e)=>{
        e.preventDefault();
        setYear(e.target.value);
    },[])
    
    React.useEffect(()=>{
        dispatch(getAccidentList(year))
        // console.log(data);
    },[dispatch,year])


    return (
        <div>
            <Spinner visible={loading}/>
            <select onChange={onChangeYear}>
                <option value="">- 년도선택 -</option>
                {
                    [...new Array(2018-2005+1)].map((v,i)=>{
                        return (
                            <option  key={i} value={2005+i}>{2005+i}년도</option>
                        )
                    })
                }
            </select>
            {error? <ErrorView error={error}/> : (
                <Table>
                <thead>
                    <tr>
                        {
                            ['번호','년도','월','교통사고 건수','사망자 수','부상자 수'].map((v,i)=>{
                                return(
                                    <th key={i}>{v}</th>
                                    )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                        {
                            data && data.map((v,i)=>{
                                accidentSum += v.accident;
                                deathSum += v.death;
                                injurySum += v.injury;
                                return( 
                                    <tr key={i}>
                                        <td>{v.id}</td>
                                        <td>{v.year}</td>
                                        <td>{v.month}</td>
                                        <td>{v.accident}</td>
                                        <td>{v.death}</td>
                                        <td>{v.injury}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <th colSpan={3}>합계</th>
                            <th>{accidentSum}</th>
                            <th>{deathSum}</th>
                            <th>{injurySum}</th>
                        </tr>
                </tbody>
            </Table>
            )}
        </div>
    );
};

export default Accident;