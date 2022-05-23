import React from 'react';
import Spinner from '../components/Spinner';
import Table from  '../components/Table';
import ErrorView from '../components/ErrorView';

import { useSelector, useDispatch} from 'react-redux';
import { getList } from '../slices/MovieRankSlice';

import dayjs from 'dayjs';

const MovieRank=()=>{
    const today = dayjs().add(-1, 'day').format('YYYY-MM-DD');
    React.useEffect(()=>console.clear(),[]);

    //hook을 통해 slice가 관리하는 상태값 가져오기
    const { data, loading, error }  = useSelector((state)=>state.movieRank);

    const [targetDt, setTargetDt] =React.useState(dayjs().add(-1, 'day').format('YYYY-MM-DD'));

    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(getList({targetDt: targetDt.replaceAll("-","")}));
    },[dispatch, targetDt]);
    
    const onDateChange = React.useCallback((e)=>{
        e.preventDefault();
        //선택값으로 상태값을 갱신한다-> React.useEffect()에 의해 액션함수가 디스패치 된다.
        setTargetDt(e.target.value);
    },[])

    return(
        <div>
            {/* <Spinner visible={loading}/> */}

            <h1>영화진흥원 일별 박스오피스</h1>
            <form>
                <label htmlFor="">날짜선택 : </label>
                <input type="date" defaultValue={today} value={targetDt} onChange={onDateChange}/>
            </form>
            <hr />

            {error? <ErrorView error={error}/>:(
                <Table>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>관람객 수</th>
                            <th>매출액</th>
                            <th>누적 관람객 수</th>
                            <th>누적 매출액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.boxOfficeResult.dailyBoxOfficeList.map((v,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{v.rank}</td>
                                        <td>{v.movieNm}</td>
                                        <td>{Number(v.audiCnt).toLocaleString()}명</td>
                                        <td>{Number(v.salesAmt).toLocaleString()}원</td>
                                        <td>{Number(v.audiAcc).toLocaleString()}명</td>
                                        <td>{Number(v.salesAcc).toLocaleString()}원</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            )}
        </div>
    )
}

// export default React.memo(MovieRank);
export default MovieRank;