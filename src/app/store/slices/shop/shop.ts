import { createSlice } from "@reduxjs/toolkit";
import { shopThunk } from "./shop.thunk";

import type { ShopState } from "./shop.interface";

const initialState: ShopState = {
	shops: null,
	goods: null,
	error: null,
	isLoading: false
};

const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {},
	extraReducers: (builder): void => {
		builder.addCase(shopThunk.getAllShops.pending, (state): void => {
			state.error = null;
			state.isLoading = true;
		});
		builder.addCase(shopThunk.getAllShops.fulfilled, (state, { payload }): void => {
			state.isLoading = false;
			state.shops = payload;
		});
		builder.addCase(shopThunk.getAllShops.rejected, (state, { payload }): void => {
			state.isLoading = false;

			if (payload) {
				state.error = payload;
			}
		});

		// ============================
		builder.addCase(shopThunk.getShopGoods.pending, (state): void => {
			state.error = null;
			state.isLoading = true;
		});
		builder.addCase(shopThunk.getShopGoods.fulfilled, (state, { payload }): void => {
			state.isLoading = false;
			state.goods = payload;
		});
		builder.addCase(shopThunk.getShopGoods.rejected, (state, { payload }): void => {
			state.isLoading = false;

			if (payload) {
				state.error = payload;
			}
		});
	}
});

export const { reducer: shopReducer, actions: shopActions } = shopSlice;
