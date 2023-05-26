import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShopService } from "app/services/shop.service";

import type { Shop } from "@/interfaces/shop.interface";
import type { Product } from "@/interfaces/product.interface";

const getAllShops = createAsyncThunk<Shop[], void, { rejectValue: string }>("get_all_shops", async (_, thunkApi) => {
	try {
		const shops = await ShopService.getAllShops();
		return shops;
	} catch (error: unknown) {
		return thunkApi.rejectWithValue("Something went wrong");
	}
});

const getShopGoods = createAsyncThunk<Product[], string, { rejectValue: string }>(
	"get_shop_products",
	async (shopName, thunkApi) => {
		try {
			const goods = await ShopService.getShopProducts(shopName);
			return goods;
		} catch (error: unknown) {
			return thunkApi.rejectWithValue("Something went wrong");
		}
	}
);

export const shopThunk = { getAllShops, getShopGoods };
