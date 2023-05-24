import type { AppProps } from "next/app";

import { Roboto_Flex } from "@next/font/google";

import "@/styles/globals.scss";

const font = Roboto_Flex({
	subsets: ["latin"],
	weight: ["400", "500", "700"]
});

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
			<Component {...pageProps} />
		</>
	);
}
