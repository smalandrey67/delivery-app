import Link from "next/link";

import styles from "./Shop.module.scss";

export function Shop(): JSX.Element {
	return (
		<Link href="/shop/test" className={styles.shop}>
			shop
		</Link>
	);
}
