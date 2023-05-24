import { withLayout } from "@/Layout/Layout";

function Shop(): JSX.Element {
	return <div>shop page</div>;
}

export default withLayout({
	Component: Shop,
	pageTitle: "Shop",
	pageDescription: "This is the page where you can find any goods that you want "
});
