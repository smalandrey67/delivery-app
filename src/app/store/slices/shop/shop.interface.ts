import type { Shop } from "@/interfaces/shop.interface";
import type { Product } from "@/interfaces/product.interface";

export interface ShopState {
	shops: null | Shop[];
	goods: null | Product[];
	error: null | string;
	isLoading: boolean;
}
