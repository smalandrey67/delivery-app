import type { ButtonProps } from "./Button.interface";

import styles from "./Button.module.scss";

export function Button({ children, ...props }: ButtonProps): JSX.Element {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	);
}
