import { Ordering } from "./components/Ordering/Ordering";
import { Cart } from "./components/Cart/Cart";

import styles from "./ShoppingCartScreen.module.scss";

export function ShoppingCartScreen(): JSX.Element {
	return (
		<div className={styles.shoppingCartWrapper}>
			<Ordering />
			<Cart />
		</div>
	);
}
