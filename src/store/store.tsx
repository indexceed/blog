import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk';

import postReducer from './slices/postSlice'

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  post:postReducer
})

const persitedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persitedReducer,
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch