import { Ordering } from "./components/Ordering/Ordering";
import { Cart } from "./components/Cart/Cart";
import { Button } from "@/ui/Button/Button";

import styles from "./ShoppingCartScreen.module.scss";

export function ShoppingCartScreen(): JSX.Element {
	return (
		<div className={styles.shoppingCartWrapper}>
			<Ordering />
			<Cart />
			<Button>Submit</Button>
		</div>
	);
}
