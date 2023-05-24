import { Product } from "@/common/Product/Product";

import styles from "./Goods.module.scss";

export function Goods(): JSX.Element {
	return (
		<div className={styles.goods}>
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	);
}
