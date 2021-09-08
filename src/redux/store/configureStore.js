import { persistReducer, persistStore } from "redux-persist";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import rootReducer from "../RootReducer";
import api from "../middleware/api";

const persistedReducer = persistReducer({ key: "Radwan_new", storage }, rootReducer);

const store = configureStore({ reducer: persistedReducer, middleware: [...getDefaultMiddleware({ serializableCheck: false }), api] });

const persister = persistStore(store);

export { store, persister };
