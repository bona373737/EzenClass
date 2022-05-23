import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//비동기 처리함수 구현_ payload는 이 함수를 호출할때 전달되는 파라미터
export const getList = createAsyncThunk('news/getList', async(payload, {rejectWithValue})=>{
    let result = null;
    try {
        result= await axios.get(' http://localhost:3001/news');
    } catch (err) {
        result= rejectWithValue(err.response);
    }
    return result;
});

const departmentSlice = createSlice({
    name: 'news',
    initialState:{
        data:null,
        loading: false,
        error: null
    },
    reducers:{

    },
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
})

export default departmentSlice.reducer;