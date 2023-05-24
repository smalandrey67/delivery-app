import { withLayout } from "@/Layout/Layout";

function ShoppingCart(): JSX.Element {
	return <div>shopping cart page</div>;
}

export default withLayout({
	Component: ShoppingCart,
	pageTitle: "Shopping Cart",
	pageDescription: "This is a page where you can check your goods"
});
