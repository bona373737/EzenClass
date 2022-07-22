import { configureStore } from "@reduxjs/toolkit";
import DepartmentSlice from "./slices/DepartmentSlice";
import ProfessorSlice from './slices/ProfessorSlice';

const store = configureStore({
    reducer:{
        DepartmentSlice : DepartmentSlice,
        ProfessorSlice : ProfessorSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;