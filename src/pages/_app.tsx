import { Provider } from "react-redux";
import { Roboto_Flex } from "@next/font/google";

import { setupStore } from "@/store/store";
import type { AppProps } from "next/app";

import "@/styles/globals.scss";

const font = Roboto_Flex({
	subsets: ["latin"],
	weight: ["400", "500", "700"]
});

const store = setupStore();

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<style jsx global>
				{`
					:root {
						--roboto-flex-font: ${font.style.fontFamily};
					}
				`}
			</style>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}
