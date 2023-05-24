import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	labelName: string;
	error?: string | null;
}
