import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import newSlice from './slicdes/NewSlice';

const logger = createLogger();

const store = configureStore({
    reducer:{
        news:newSlice
    },
    middleware: [...getDefaultMiddleware({serializableCheck:false}), logger],
    devTools: true
})

export default store;