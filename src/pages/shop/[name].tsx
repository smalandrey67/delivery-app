import { withLayout } from "@/Layout/Layout";

function Shop(): JSX.Element {
	return <div>shop</div>;
}

export default withLayout({
	Component: Shop,
	pageTitle: "Shop",
	pageDescription: "This is the page about shop"
});
