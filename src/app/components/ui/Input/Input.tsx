import { forwardRef } from "react";
import type { InputProps } from "./Input.interface";

import styles from "./Input.module.scss";

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(({ labelName, error, ...args }, ref): JSX.Element => {
	return (
		<label className={styles.label}>
			<input ref={ref} className={styles.input} {...args} />
			{error && <span className={styles.inputError}>{error}</span>}
			<p className={styles.labelName}>{labelName}</p>
		</label>
	);
});
