import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import KakaoSlice from "./slices/KakaoSlice";

const store = configureStore({
    reducer:{
        kakao : KakaoSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;