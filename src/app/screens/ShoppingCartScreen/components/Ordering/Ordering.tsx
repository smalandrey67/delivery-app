import { Input } from "@/ui/Input/Input";

import styles from "./Ordering.module.scss";

export function Ordering(): JSX.Element {
	return (
		<form className={styles.ordering}>
			<Input labelName="name" />
			<Input labelName="email" />
			<Input labelName="phone" />
			<Input labelName="address" />
		</form>
	);
}
