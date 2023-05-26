import { CartProduct } from "@/common/CartProduct/CartProduct";

import { useAppSelector } from "@/hooks/useRedux";
import { selectGoodsInCart } from "@/store/slices/shoppingCart/shoppingCart.selectors";

import styles from "./Cart.module.scss";

export function Cart(): JSX.Element {
	const goodsInCart = useAppSelector(selectGoodsInCart);

	return (
		<div className={styles.cart}>
			{goodsInCart.length ? (
				goodsInCart.map((product) => <CartProduct key={product._id} {...product} />)
			) : (
				<span className={styles.cartWarning}>There is not goods in cart</span>
			)}
		</div>
	);
}
