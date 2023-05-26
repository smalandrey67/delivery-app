import { $api } from "@/configs/axios.config";
import { OrderBody } from "./Ordering.interface";

export const OrderingService = {
	async submitOrder(orderBody: OrderBody): Promise<OrderBody> {
		const { data } = await $api.post("/order", orderBody);
		return data;
	}
};
