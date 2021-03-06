import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//ajax통신으로 목록조회하는 비동기처리 함수 구현
export const getList = createAsyncThunk("department/getList", async(payload, {rejectWithValue})=>{
    let result = null;
    try {
        result = await axios.get('http://localhost:3001/department');
    } catch (err) {
        //에러발생시 'rejectWithValue()함수에 에러 데이터를 전달하면 extraReducer의 reject함수가 호출된다.
        result = rejectWithValue(err.response);
    }
    return result;
});


//Slice정의(action함수 + reducer의 개념)
const departmentSlice = createSlice({
    name:'department',
    initialState:{
        data: null,      //Ajax처리를 통해 수신된 데이터
        loading: false,  //로딩여부
        error:null       //에러 정보
    },
    //내부 action 및 동기 action
    reducers:{

    },
    //외부 action 및 비동기 action(Ajax용)
    extraReducers:{
        [getList.pending]:(state, {payload})=>{
            return {...state, loading:true}
        },
        [getList.fulfilled]:(state, {payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error: null
            }
        },
        [getList.rejected]:(state,{payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error: {
                    code:payload?.state? payload.state:500,
                    message: payload?.statusText? payload.statusText:'Server Error'
                }
            }
        }
    }
});

//reducer 객체 내보내기
export default departmentSlice.reducer;
