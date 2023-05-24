import { Header } from "./components/Header/Header";
import { Meta } from "./components/Meta/Meta";

import type { LayoutProps, WithLayoutProps } from "./Layout.interface";

export function Layout({ children, ...metaProps }: LayoutProps): JSX.Element {
	return (
		<>
			<Meta {...metaProps} />
			<div>
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
}

export const withLayout = <T extends Record<string, unknown>>({
	Component,
	pageTitle,
	pageDescription
}: WithLayoutProps<T>): ((props: T) => JSX.Element) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout pageTitle={pageTitle} pageDescription={pageDescription}>
				<Component {...props} />
			</Layout>
		);
	};
};
