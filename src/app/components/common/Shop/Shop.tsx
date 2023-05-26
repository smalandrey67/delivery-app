import Link from "next/link";
import clsx from "clsx";

import { useAppSelector } from "@/hooks/useRedux";
import { selectGoodsInCart } from "@/store/slices/shoppingCart/shoppingCart.selectors";
import type { ShopProps } from "./Shop.interface";

import styles from "./Shop.module.scss";

export function Shop({ name }: ShopProps): JSX.Element {
	const goodsInCart = useAppSelector(selectGoodsInCart);

	const isExistInCart = goodsInCart.some((product) => product.shop === name);

	return (
		<Link
			href={`/shop/${name}`}
			className={clsx(styles.shop, {
				[styles.shopDisabled]: goodsInCart.length ? !isExistInCart : false
			})}
		>
			{name}
		</Link>
	);
}
