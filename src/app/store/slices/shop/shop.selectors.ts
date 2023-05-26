import { RootState } from "@/store/store";

export const selectShops = (state: RootState) => state.shops.shops;
export const selectGoods = (state: RootState) => state.shops.goods;
export const selectShopsIsLoading = (state: RootState) => state.shops.isLoading;
