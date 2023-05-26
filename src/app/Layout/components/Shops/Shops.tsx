import { useEffect } from "react";

import { Shop } from "@/common/Shop/Shop";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { shopThunk } from "@/store/slices/shop/shop.thunk";
import { selectShops, selectShopsIsLoading } from "@/store/slices/shop/shop.selectors";

import styles from "./Shops.module.scss";

export function Shops(): JSX.Element {
	const dispatch = useAppDispatch();
	const shops = useAppSelector(selectShops);
	const isLoading = useAppSelector(selectShopsIsLoading);

	useEffect(() => {
		dispatch(shopThunk.getAllShops());
	}, [dispatch]);

	return (
		<aside className={styles.shops}>
			<h2 className={styles.shopsTitle}>Shops</h2>
			{isLoading && "Loading..."}
			{shops && shops.map(({ _id, ...properties }) => <Shop key={_id} {...properties} />)}
		</aside>
	);
}
