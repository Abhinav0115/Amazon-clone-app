import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

//Storage -> not working with redux-persist
import storage from "redux-persist/lib/storage";

//Custom storage -> currently working with redux-persist
import storageX from "./storage";

//Slices
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";

const persistConfig = {
    key: "root",
    version: 1,
    // storage,
    storage: storageX,
};

//Persisted reducer
const persistedCartReducer = persistReducer(persistConfig, cartSlice);
const persistedOrderReducer = persistReducer(persistConfig, orderSlice);

//Store
export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        order: persistedOrderReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
