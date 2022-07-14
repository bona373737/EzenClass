import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pending, fulfilled, rejected} from '../Util';
import {cloneDeep} from 'lodash';

//브라우저 history 기능이 정상작동하게 하려면 URL의 끝부분이 "/"로 끝나야 한다.
//axios가 URL을 인식했을때 슬래시로 끝나지 않은경우 완전한 URL로 인식하지 못한다.
const API_URL="http://localhost:3001/department/"
const sliceName = "DepartmentSlice"

/**다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk(`${sliceName}/getList/`, async(payload, {rejectWithValue})=>{
    let result = null;
    try {
        result= await axios.get(API_URL)
    } catch (error) {
        result = rejectWithValue(error.response);
    }
    return result;
})

/**단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk(`${sliceName}/getItem/`, async(payload, {rejectWithValue})=>{
    let result = null;
    try {
        result= await axios.get(`${API_URL}/${payload?.deptno}`)
    } catch (error) {
        result = rejectWithValue(error.response);
    }
    return result;
})

/**데이터 저장를 위한 비동기 함수 */
export const postItem = createAsyncThunk(`${sliceName}/postItem/`, async(payload, {rejectWithValue})=>{
    let result = null;
    try {
        result= await axios.get(API_URL,{
            dname: payload.dname,
            loc: payload.loc
        })
    } catch (error) {
        result = rejectWithValue(error.response);
    }
    return result;
})

/**데이터 수정를 위한 비동기 함수 */
export const putItem = createAsyncThunk(`${sliceName}/putItem/`, async(payload, {rejectWithValue})=>{
    let result = null;
    try {
        result= await axios.get(`${API_URL}/${payload.deptno}`,{
            dname: payload.dname,
            loc: payload.loc
        })
    } catch (error) {
        result = rejectWithValue(error.response);
    }
    return result;
});

/**데이터 삭제를 위한 비동기 함수 */
export const deleteItem = createAsyncThunk(`${sliceName}/putItem/`, async(payload, {rejectWithValue})=>{
    let result = null;
    try {
        result= await axios.get(`${API_URL}/${payload.deptno}`)
    } catch (error) {
        result = rejectWithValue(error.response);
    }
    return result;
})


const DepartmentSlice = createSlice({
    name: sliceName,
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {

    },
    extraReducers:{
        [getList.pending]: pending,
        [getList.fulfilled]: fulfilled,
        [getList.rejected]:rejected,

        [getItem.pending]:pending,
        [getItem.fulfilled]: fulfilled,
        [getItem.rejected]:rejected,
        
        [postItem.pending]:pending,
        [postItem.fulfilled]: fulfilled,
        [postItem.rejected]:rejected,

        [putItem.pending]:pending,
        [putItem.fulfilled]: fulfilled,
        [putItem.rejected]:rejected,

        [deleteItem.pending]:pending,
        //원본데이터를 복사해놨다가 삭제한 데이터만 빼고 나머지 데이터를 돌려주는 처리추가
        //수정기능은 백엔드에서 수정적용된 데이터를 다시 select해서 전달해주는 것과 다르게 처리됨
        [deleteItem.fulfilled]: (state, {meta,payload})=>{
            //기존의 상태값을 복사한다.(원본이 JSON이므로 깊은복사 진행)
            const data = cloneDeep(state.data);
            console.log(data);

            //기존의 데이터에서 삭제가 요청된 항목의 위치를 검색한다.
            const index = data.item.findIndex(element => element.deptno === parseInt(meta.org.deptno));
            console.log('index = ' + index);

            //검색이 되었다면 해당 항목을 삭제한다.
            if(index !== undefined){
                data.item.splice(index,1);
            }
            console.log(data);

            return{
                data:data,
                loading:false,
                error: null
            }
        },
        [deleteItem.rejected]:rejected
    }
})

export default DepartmentSlice.reducer;