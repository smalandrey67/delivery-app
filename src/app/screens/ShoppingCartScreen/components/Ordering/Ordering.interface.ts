import { Product } from "@/interfaces/product.interface";

export interface SubmitOrder {
	name: string;
	email: string;
	phone: string;
	address: string;
}

export interface OrderBody {
	user: SubmitOrder;
	goods: Product[];
	totalSum: number;
}
