import type { Product } from "@/interfaces/product.interface";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ShoppingCartState } from "./shoppingCart.interface";

const initialState: ShoppingCartState = {
	goodsInCart: [],
	price: 0
};

const shoppingCartSlice = createSlice({
	name: "shoppingCart",
	initialState,
	reducers: {
		addToShoppingCart: (state, { payload }: PayloadAction<{ product: Product }>): void => {
			const modifiedProduct = { ...payload.product, count: 1 };

			const isAlreadyExist = state.goodsInCart.some((product) => product._id === payload.product._id);

			if (isAlreadyExist) return;

			state.goodsInCart.push(modifiedProduct);

			state.price = state.goodsInCart.reduce((accum, item) => {
				return accum + item.price * item.count;
			}, 0);
		},
		setNewProductCount: (state, { payload }: PayloadAction<{ _id: number; count: number }>): void => {
			state.goodsInCart = state.goodsInCart.map((product) => {
				if (product._id === payload._id) {
					return { ...product, count: payload.count };
				}
				return product;
			});

			state.price = state.goodsInCart.reduce((accum, item) => {
				return accum + item.price * item.count;
			}, 0);
		},

		resetShoppingCart: (state) => {
			state.price = 0;
			state.goodsInCart = [];
		}
	}
});

export const { reducer: shoppingCartReducer, actions: shoppingCartActions } = shoppingCartSlice;
