import { RootState } from "@/store/store";

export const selectGoodsInCart = (state: RootState) => state.shoppingCart.goodsInCart;
export const selectPrice = (state: RootState) => state.shoppingCart.price;
