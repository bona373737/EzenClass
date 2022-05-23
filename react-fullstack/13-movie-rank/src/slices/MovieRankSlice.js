import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
const API_KEY = 'adf72d6240eadf55d0e80c5a88c3c9f0';

export const getList = createAsyncThunk('movieRank/getList', async(payload, {rejectWithValue})=>{
    let result =null;

    try {
        result = await axios.get(API_URL , {
            params:{
                key: API_KEY,
                targetDt: payload.targetDt,
            }
        })
        // console.log(result);
        //backend코드가 아주 이상하게 되어 있음... 
        //에러가 발생하더라독 http상태코드는 200으로 응답해주고 response값으로 faultInfo값을 전달해준다.
        //때문에 직접 에러를 감지하는 코드를 추가 해줘야 한다. 
        if(result.data.faultInfo !== undefined){
            const err = new Error();
            err.response = { status:500, statusText: result.data.faultInfo.message};
            throw err;
        }
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

const MovieRankSlice = createSlice({
    name: 'movieRank',
    initialState:{
        data: null,
        loading: false,
        error: null
    },
    reducers:{

    },
    extraReducers:{
        [getList.pending] : (state, {payload})=>{
            return {...state, loading:true}
        },
        [getList.fulfilled]: (state, {payload})=>{
            return{
                data: payload?.data,
                loading:false,
                error: null
            }
        },
        [getList.rejected]: (state,{payload}) =>{
            return{
                data: payload?.data,
                loading:false,
                error: {
                    code: payload?.status? payload.state:500,
                    message: payload?.statusText? payload.statusText:'Server Error'
                }
            }
        }
    }
})
export default MovieRankSlice.reducer;