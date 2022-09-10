import {combineReducers, configureStore} from '@reduxjs/toolkit'
import loginReducer from './userLogin'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from "./storage";

const rootReducer = combineReducers({
    login: loginReducer,
})


const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [REHYDRATE, PERSIST, REGISTER, FLUSH, PAUSE, PURGE]
            },
        })
})

export const persistor = persistStore(store)

export default store
