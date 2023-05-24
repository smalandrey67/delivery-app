import { CartProduct } from "@/common/CartProduct/CartProduct";

import styles from "./Cart.module.scss";

export function Cart(): JSX.Element {
	return (
		<div className={styles.cart}>
			<CartProduct />
			<CartProduct />
			<CartProduct />
			<CartProduct />
			<CartProduct />
			<CartProduct />
		</div>
	);
}
