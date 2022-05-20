import React from 'react';
import { configureStore, ConfigureStore} from '@reduxjs/toolkit';
import CounterSlice from './slices/CounterSlice';

const store =configureStore({
  reducer:{
    //개발자가 직접 작성한 reducer들이 명시되어야 한다.
    counter:CounterSlice
  }
})

export default store;