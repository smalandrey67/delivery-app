import { type SubmitHandler, useForm } from "react-hook-form";

import { Input } from "@/ui/Input/Input";
import { Button } from "@/ui/Button/Button";

import type { SubmitOrder } from "./Ordering.interface";
import { formValidations } from "@/constants/formValidations.constants";

import styles from "./Ordering.module.scss";

export function Ordering(): JSX.Element {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<SubmitOrder>({ mode: "onBlur" });

	const submitOrder: SubmitHandler<SubmitOrder> = (data): void => {
		console.log(data);
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
			<p className={styles.orderingPrice}>total price: 999$</p>
			<Button>Submit</Button>
		</form>
	);
}
