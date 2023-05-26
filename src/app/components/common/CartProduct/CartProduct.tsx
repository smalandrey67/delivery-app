import Image from "next/image";
import { ChangeEvent, useState } from "react";

import { CartProductProps } from "./CartProduct.interface";
import { useAppDispatch } from "@/hooks/useRedux";

import styles from "./CartProduct.module.scss";
import { shoppingCartActions } from "@/store/slices/shoppingCart/shoppingCart";

export function CartProduct({ image, name, price, count, _id }: CartProductProps): JSX.Element {
	const dispatch = useAppDispatch();
	const [productCount, setProductCount] = useState(count);

	const changeProductCount = (event: ChangeEvent<HTMLInputElement>): void => {
		dispatch(shoppingCartActions.setNewProductCount({ _id, count: +event.target.value }));
		setProductCount(+event.target.value);
	};

	return (
		<article className={styles.cartProduct}>
			<div className={styles.cartProductBody}>
				<div className={styles.cartProductImageWrapper}>
					<Image src={image} className={styles.cartProductImage} fill alt={name} />
				</div>

				<div className={styles.cartProductInfo}>
					<h4 className={styles.cartProductTitle}>{name}</h4>
					<span className={styles.cartProductPrice}>Price: {price} $</span>
					<input
						type="number"
						className={styles.cartProductCount}
						name="counter"
						onChange={changeProductCount}
						min={1}
						value={productCount}
					/>
				</div>
			</div>
		</article>
	);
}
