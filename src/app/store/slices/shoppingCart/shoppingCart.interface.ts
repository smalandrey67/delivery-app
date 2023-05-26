import type { Product } from "@/interfaces/product.interface";

type GoodsInCartType = Product & {
	count: number;
};

export interface ShoppingCartState {
	goodsInCart: GoodsInCartType[];
	price: number;
}
