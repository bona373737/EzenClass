import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAccidentList = createAsyncThunk('accident/getAccidentList', async(payload, {rejectWithValue})=>{
    let result = null;
    try {
        result = payload? await axios.get('http://localhost:3001/traffic_acc',{
            params:{year:payload}
        }) : await axios.get('http://localhost:3001/traffic_acc')
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

const AccidentSlice = createSlice({
    name: 'accident',
    initialState:{
        data: null,
        loading: false,
        error: null
    },
    reducers:{

    },
    extraReducers:{
        [getAccidentList.pending]:(state, {payload})=>{
            return {...state, loading:true}
        },
        [getAccidentList.fulfilled]:(state, {payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error: null
            }
        },
        [getAccidentList.rejected]:(state,{payload})=>{
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

export default AccidentSlice.reducer;