import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * 정석적인 작업방법은 API URL한개당 각각의 Slice파일을 만드는것인데,
 * 카카오api의 경우 API URL주소만 다르고 각각의 요청 파라미터와 응답결과의 구조가 동일하기 때문에 
 * slice파일 한개로 API URL 4개를 한번에 연결 할수 있도록 작업했다.
 */

const API_URL = {
    web: 'https://dapi.kakao.com/v2/search/web',
    blog: 'https://dapi.kakao.com/v2/search/blog',
    cafe: 'https://dapi.kakao.com/v2/search/cafe',
    book: 'https://dapi.kakao.com/v3/search/book',
    image: 'https://dapi.kakao.com/v2/search/image'
}
const API_KEY = '1ec49be112f4786c2d52d4c0b706c6f4';

export const getKakaoSearch = createAsyncThunk('KakaoSlice/getKakaoSearch', async(payload, {rejectWithValue})=>{
    let result = null;
    try {
                               //기본 API URL은 web검색으로 설정
        result= await axios.get(API_URL[payload.api? payload.api:'web'], {
            params:{
                query: payload.query    ,
                sort: payload.sort? payload.sort : null,
                page: payload.page? payload.page: 1,
                size: payload.size? payload.size : 20
            },
            headers: {Authorization : `KakaoAK ${API_KEY}`} 
        })
    } catch (error) {
        result = rejectWithValue(error.response);
    }
    return result;
})

const KakaoSlice = createSlice({
    name: 'kakao',
    initialState: {
        //카카오 API의 응답값들의 초기값을 설정해주기
        //API마다 응답 구조가 다르기때문에 api명세서 확인 필요(loading과 error는 기본으로 동일)
        meta:null,
        documents: null,
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers:{
        [getKakaoSearch.pending]: (state, {payload})=>{
            return { ...state, loading:true}
        },
        [getKakaoSearch.fulfilled]: (state, {payload})=>{
            return {
                meta: payload?.data?.meta,
                documents : payload?.data?.documents,
                loading: false,
                error: null
            }
        },
        [getKakaoSearch.rejected]:(state, {payload})=>{
            return {
                meta: null,
                documents: null,
                loading: false,
                error: {
                    code: payload?.status ? payload.status: 500,
                    message: payload?.statusText? payload.statusText: 'Server Error'
                }
            }
        }
    }
})

export default KakaoSlice.reducer;