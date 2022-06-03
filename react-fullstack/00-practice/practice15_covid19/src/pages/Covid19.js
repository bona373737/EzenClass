import React, { memo } from 'react';
import LineChartView from '../components/LineChartView';
import {useSelector, useDispatch} from "react-redux";
import {getCovidData} from '../slices/Covid19Slice';
import { useParams } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';

import ErrorView from '../components/ErrorView';
import Spinner from '../components/Spinner';


const Covid19 = memo(() => {
    const {api} = useParams();
    const query = useQueryString();
    const query_gte =query[Object.keys(query)[0]];
    const query_lte =query[Object.keys(query)[1]];
    // console.log(query);

    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state)=>state.covid19);

    // console.log(data);
    // console.log(query_gte);
    // console.log(query_lte);
    
    React.useEffect(()=>{
        dispatch(getCovidData({
            gte:query_gte,
            lte:query_lte,
        }))
    },[dispatch,api,query_gte,query_lte]);
    
    return (
        <>
            <Spinner visible={loading}/>
            {
                loading? 'Loading중입니다..' : (
                    error? <ErrorView error={error}/> : (
                        data? <LineChartView data={data} api={api}/> : ''
                    )
                )
            }
        </>
    )
});

export default Covid19;


