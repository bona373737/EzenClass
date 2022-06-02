import React,{memo} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCovidData } from './slices/Covid19Slice';


const Test =memo(() => {

    const dispatch = useDispatch();
    const { data, loading, error} = useSelector((state)=>state.covid19);

    React.useEffect(()=>{
        dispatch(getCovidData())
    },[dispatch]);

    return (
        loading? "loading....":(
            error? JSON.stringify(error):(
                <>
                    {JSON.stringify(data)}
                </>
            )
        )
    );
});

export default Test;