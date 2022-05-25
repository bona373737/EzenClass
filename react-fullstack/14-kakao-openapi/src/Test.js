import React, {memo} from 'react';

import { useSelector, useDispatch} from 'react-redux';
import { getKakaoSearch } from './slices/KakaoSlice';

const Test = memo(()=>{
    const dispatch = useDispatch();
    const {meta, documents, loading, error} = useSelector((state)=>state.kakao);

    React.useEffect(()=>{
        dispatch(getKakaoSearch({
            api: 'book',         //api 파라미터 없는경우 slice에서 기본값 web으로 지정해줌
            query: '프론트엔드',  //query파라미터 없는경우 slice에서 기본값 null으로 지정해줌
            page:1,              //page파라미터 없는경우 slice에서 기본값 1으로 지정해줌
            size:5,             //size파라미터 없는경우 slice에서 기본값 20으로 지정해줌
        }))
    },[dispatch])

    return(
        loading? "loading..." : (
            error? JSON.stringify(error) : (
                <>
                    <h1>Meta</h1>
                    {JSON.stringify(meta)}
                    <h1>Documents</h1>
                    {JSON.stringify(documents)}
                </>
            )
        )
    )
});

export default Test;