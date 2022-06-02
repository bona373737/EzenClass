import { configureStore } from '@reduxjs/toolkit';
import Covide19Slice from './slices/Covid19Slice';

const store = configureStore({
    reducer:{
        covid19:Covide19Slice
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
    devTools:true
});

export default store;


