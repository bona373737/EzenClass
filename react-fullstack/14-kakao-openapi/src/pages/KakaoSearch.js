import React, {memo, useEffect} from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";
import {useSelector, useDispatch} from 'react-redux';
import { getKakaoSearch} from '../slices/KakaoSlice';

//infinity scroll
import {useInView} from 'react-intersection-observer';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import ListItem from "../components/ListItem";
import ImageItem from "../components/ImageItem";
import GoTop from '../components/GoTop';

const ListContainer = styled.ul`
    list-style: none;

`; //ListContainer end

const KakaoSearch = memo(()=>{
    //path파라미터 받아오기
    const {api} = useParams();
    //queryString의 검색어 가져오기
    const {query} = useQueryString();
    //리덕스를 통한 검색결과 상태조회
    const dispatch = useDispatch();
    const {meta, documents, loading, error} = useSelector((state)=>state.kakao);

    //페이지번호 상태값
    const [page, setPage] = React.useState(1);
    //무한스클롤 관련
    const [ref, inView] = useInView();

    const getContent = React.useCallback((p=1)=>{
        console.log(`api=${api}, page=${p}`)
        setPage(p);
        dispatch(getKakaoSearch({
            api:api,
            query:query,
            page:p,
            size:api === "image"? 80:50,
        }));
    },[api,query,dispatch])

    //검색어가 전달되었을 경우의 hook
    useEffect(()=>{
        window.scrollTo(0,0);
        getContent(1);
    },[getContent,api,query]);

    //사용자가 마지막 요소를 보고 있고, 로딩중이 아니라면
    React.useEffect(()=>{
        if(inView && !loading){
            getContent(page+1);
        }
    },[getContent,inView,loading,page]);

    return(
        <div>
            <Spinner visible={loading}/>

            {error? (
                <ErrorView error={error}/>
            ): documents && (
                <ListContainer api={api}>
                    {
                        documents.map((v,i)=>{
                            return api === 'image'? (
                                <ImageItem key={i} type={api} item={v}/>
                            ):(
                                <ListItem key={i} type={api} item={v}/>
                            )
                        })
                    }
                </ListContainer>
            )}
        </div>
    )
})//component end

export default KakaoSearch;