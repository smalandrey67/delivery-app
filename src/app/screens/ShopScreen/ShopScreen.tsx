import { useEffect } from "react";
import { useRouter } from "next/router";

import { Goods } from "./components/Goods/Goods";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

import { selectGoods } from "@/store/slices/shop/shop.selectors";
import { shopThunk } from "@/store/slices/shop/shop.thunk";

export function ShopScreen(): JSX.Element {
	const dispatch = useAppDispatch();
	const goods = useAppSelector(selectGoods);

	const router = useRouter();

	useEffect(() => {
		if (router.query.name && typeof router.query.name === "string") {
			dispatch(shopThunk.getShopGoods(router.query.name));
		}
	}, [dispatch, router.query.name]);

	return <>{goods && <Goods goods={goods} />}</>;
}
