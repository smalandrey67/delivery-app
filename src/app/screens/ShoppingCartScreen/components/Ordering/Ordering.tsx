import { type SubmitHandler, useForm } from "react-hook-form";

import { Input } from "@/ui/Input/Input";
import { Button } from "@/ui/Button/Button";

import type { SubmitOrder } from "./Ordering.interface";
import { formValidations } from "@/constants/formValidations.constants";
import { OrderingService } from "./Ordering.service";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { selectGoodsInCart, selectPrice } from "@/store/slices/shoppingCart/shoppingCart.selectors";

import styles from "./Ordering.module.scss";
import { shoppingCartActions } from "@/store/slices/shoppingCart/shoppingCart";

export function Ordering(): JSX.Element {
	const totalPrice = useAppSelector(selectPrice);
	const goodsInCart = useAppSelector(selectGoodsInCart);

	const dispatch = useAppDispatch();

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<SubmitOrder>({ mode: "onBlur" });

	const submitOrder: SubmitHandler<SubmitOrder> = async (data): Promise<void> => {
		if (!goodsInCart.length) return;

		await OrderingService.submitOrder({ user: data, goods: goodsInCart, totalSum: totalPrice });
		dispatch(shoppingCartActions.resetShoppingCart());

		reset();
	};

	const nameError = errors.name ? errors.name.message : null;
	const emailError = errors.email ? errors.email.message : null;
	const phoneError = errors.phone ? errors.phone.message : null;
	const addressError = errors.address ? errors.address.message : null;

	return (
		<form className={styles.ordering} onSubmit={handleSubmit(submitOrder)}>
			<Input labelName="name" type="text" autoComplete="username" {...register("name", formValidations.name)} error={nameError} />
			<Input
				labelName="email"
				type="email"
				autoComplete="email"
				{...register("email", formValidations.email)}
				error={emailError}
			/>
			<Input labelName="phone" type="tel" autoComplete="tel" {...register("phone", formValidations.phone)} error={phoneError} />
			<Input labelName="address" type="text" {...register("address", formValidations.address)} error={addressError} />
			<p className={styles.orderingPrice}>total price: {totalPrice} $</p>
			<Button>Submit</Button>
		</form>
	);
}
