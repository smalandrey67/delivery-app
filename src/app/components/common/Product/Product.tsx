import Image from "next/image";

import { Button } from "@/ui/Button/Button";

import styles from "./Product.module.scss";

export function Product(): JSX.Element {
	return (
		<article className={styles.product}>
			<div className={styles.productImageWrapper}>
				<Image
					src="data:image/jpeg;base64,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"
					className={styles.productImage}
					fill
					alt="!!!! change alt"
				/>
			</div>
			<h4 className={styles.productTitle}>Big Burger</h4>
			<Button>Add to Cart</Button>
		</article>
	);
}
