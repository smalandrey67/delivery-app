import { $api } from "@/configs/axios.config";
import type { Product } from "@/interfaces/product.interface";
import type { Shop } from "@/interfaces/shop.interface";

export const ShopService = {
	async getAllShops(): Promise<Shop[]> {
		const { data } = await $api.get<Shop[]>("/shops");
		return data;
	},

	async getShopProducts(shopName: string): Promise<Product[]> {
		const { data } = await $api.get<Product[]>(`/shops/${shopName}`);
		return data;
	}
};
