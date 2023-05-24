import { withLayout } from "@/Layout/Layout";
import { ShoppingCartScreen } from "@/screens/ShoppingCartScreen/ShoppingCartScreen";

function ShoppingCart(): JSX.Element {
	return <ShoppingCartScreen />;
}

export default withLayout({
	Component: ShoppingCart,
	pageTitle: "Shopping Cart",
	pageDescription: "This is a page where you can check your goods"
});
