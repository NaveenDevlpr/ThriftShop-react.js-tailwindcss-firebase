import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slice/CartSlice'
import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export const reducers=combineReducers({
    cart:cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    
});

export default store