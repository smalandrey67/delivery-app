import { withLayout } from "@/Layout/Layout";
import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";

function Home(): JSX.Element {
	return <HomeScreen />;
}

export default withLayout({
	Component: Home,
	pageTitle: "Home",
	pageDescription: "This is the page where you can choose any of the shop"
});
