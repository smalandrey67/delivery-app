import Image from "next/image";

import { Button } from "@/ui/Button/Button";

import { useAppDispatch } from "@/hooks/useRedux";
import { shoppingCartActions } from "@/store/slices/shoppingCart/shoppingCart";

import type { ProductProps } from "./Product.interface";

import styles from "./Product.module.scss";

export function Product({ image, name, price, shop, _id }: ProductProps): JSX.Element {
	const dispatch = useAppDispatch();

	const addProductToCart = (): void => {
		dispatch(shoppingCartActions.addToShoppingCart({ product: { image, name, price, shop, _id } }));
	};

	return (
		<article className={styles.product}>
			<div className={styles.productImageWrapper}>
				<Image src={image} className={styles.productImage} fill alt={name} />
			</div>
			<h4 className={styles.productTitle}>{name}</h4>
			<p className={styles.productTitle}>{price} $</p>
			<Button onClick={addProductToCart}>Add to Cart</Button>
		</article>
	);
}
