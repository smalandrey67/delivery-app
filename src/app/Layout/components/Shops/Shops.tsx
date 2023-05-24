import { Shop } from "@/common/Shop/Shop";

import styles from "./Shops.module.scss";

export function Shops(): JSX.Element {
	return (
		<aside className={styles.shops}>
			<h2 className={styles.shopsTitle}>Shops</h2>

			<Shop />
			<Shop />
			<Shop />
			<Shop />
		</aside>
	);
}
