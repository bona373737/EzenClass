import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getCovidData = createAsyncThunk('Covid19Slice/getCovidData', async(payload,{rejectWithValue})=>{
    let result= null;

    try {
        result = await axios.get("http://localhost:3001/covid9",{
            params:{
                date_gte:payload.gte,
                date_lte:payload.lte
            }
        });
    } catch (error) {
        result = rejectWithValue(error.response);
    }
    return result;
});

const Covid19Slice = createSlice({
    name:'covid19',
    initialState:{
        data: null,
        loading: false,
        error: null
    },
    reducers:{

    },
    extraReducers:{
        [getCovidData.pending]:(state,{payload})=>{
            return {...state, loading:true}
        },
        [getCovidData.fulfilled]:(state,{payload})=>{
            return {
                data: payload?.data,
                loading: false,
                error:null
            }
        },
        [getCovidData.rejected]:(state,{payload})=>{
            return {
                data: null,
                loading: false,
                error:{
                    code: payload?.state? payload.status: 500,
                    message: payload?.statusText? payload.statusText:'Server Error'
                }
            }
        }
    }
})

export default Covid19Slice.reducer;

