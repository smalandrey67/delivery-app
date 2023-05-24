import { withLayout } from "@/Layout/Layout";
import { ShopScreen } from "@/screens/ShopScreen/ShopScreen";

function Shop(): JSX.Element {
	return <ShopScreen />;
}

export default withLayout({
	Component: Shop,
	pageTitle: "Shop",
	pageDescription: "This is the page where you can find any goods that you want "
});
