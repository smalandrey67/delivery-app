import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { shopReducer } from "./slices/shop/shop";
import { shoppingCartReducer } from "./slices/shoppingCart/shoppingCart";

const rootReducer = combineReducers({
	shops: shopReducer,
	shoppingCart: shoppingCartReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
