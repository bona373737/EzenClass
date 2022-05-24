import React from 'react';
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import Table from  '../components/Table';
import ErrorView from '../components/ErrorView';
import BarChartView from '../components/BarChartView';
import useMountedRef from '../hooks/useMountedRef';

import { useSelector, useDispatch} from 'react-redux';
import { getList } from '../slices/MovieRankSlice';

import dayjs from 'dayjs';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    .flex-item{
        flex-basis: 50%;
        box-sizing: border-box;
        padding: 10px;
    }
`;

const MovieRank=()=>{
    const today = dayjs().add(-1, 'day').format('YYYY-MM-DD');
    React.useEffect(()=>console.clear(),[]);

    //hook을 통해 slice가 관리하는 상태값 가져오기
    const { data, loading, error }  = useSelector((state)=>state.movieRank);

    const [targetDt, setTargetDt] =React.useState(dayjs().add(-1, 'day').format('YYYY-MM-DD'));

    //이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
    const moutedRef = useMountedRef();
    //그래프에 전달할 y축,x축 데이터
    const [chartData, setChartData] = React.useState();

    const dispatch = useDispatch();
    //페이지가 열릭 직후와 날짜값이 변경된 경우 리덕스 액션함수 디스패치(Ajax호출)
    React.useEffect(()=>{
        dispatch(getList({targetDt: targetDt.replaceAll("-","")}));
    },[dispatch, targetDt]);
    
    //드롭다운의 선택이 변경된 경우의 이벤트
    const onDateChange = React.useCallback((e)=>{
        e.preventDefault();
        //선택값으로 상태값을 갱신한다-> React.useEffect()에 의해 액션함수가 디스패치 된다.
        setTargetDt(e.target.value);
    },[])

    //Ajax연동 결과에서 그래프에 표시할 데이터만 추려내어 chartData상태값에 반영한다.
    //Ajax는 컴포넌트가 화면에 마운트됨과 동시에 실행되므로, 이처리는 컴포넌트가 화면에 마운트 된 이우헤 수행해야 한다.
    React.useEffect(()=>{
        if(moutedRef.current){
            const newData = {
                movieNm:[],
                audiCnt:[]
            }
            data.boxOfficeResult.dailyBoxOfficeList.forEach((v,i)=>{
                newData.movieNm.push(v.movieNm);
                newData.audiCnt.push(v.audiCnt);
            })
            setChartData(newData);
        }
    },[moutedRef, data])


    return(
        <div>
            <Spinner visible={loading}/>

            <h1>영화진흥원 일별 박스오피스</h1>
            <form>
                <label htmlFor="">날짜선택 : </label>
                <input type="date" defaultValue={today} value={targetDt} onChange={onDateChange}/>
            </form>
            <hr />

         
            {error?  <ErrorView error={error}/>:( 
            <Container>
                <div className="flex-item">
                    <BarChartView chartData={chartData}/>
                </div>
                <div className="flex-item">
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
                </div>
            </Container>
            )}
        </div>
    )
}

// export default React.memo(MovieRank);
export default MovieRank;