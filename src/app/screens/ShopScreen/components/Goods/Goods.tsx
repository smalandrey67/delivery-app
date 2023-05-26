import { Product } from "@/common/Product/Product";

import type { GoodsProps } from "./Goods.interface";

import styles from "./Goods.module.scss";

export function Goods({ goods }: GoodsProps): JSX.Element {
	return (
		<div className={styles.goods}>
			{goods.map((product) => (
				<Product key={product._id} {...product} />
			))}
		</div>
	);
}
