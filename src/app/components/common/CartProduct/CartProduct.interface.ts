import { ProductProps } from "../Product/Product.interface";

export interface CartProductProps extends ProductProps {
	count: number;
}
