import { useRouter } from "next/router";

import { Header } from "./components/Header/Header";
import { Shops } from "./components/Shops/Shops";
import { Meta } from "./components/Meta/Meta";

import type { LayoutProps, WithLayoutProps } from "./Layout.interface";

import styles from "./Layout.module.scss";

export function Layout({ children, ...metaProps }: LayoutProps): JSX.Element {
	const router = useRouter();

	return (
		<>
			<Meta {...metaProps} />
			<div>
				<Header />
				<main>
					<div className="container">
						{["/", "/shop/[name]"].includes(router.pathname) ? (
							<div className={styles.layoutWrapper}>
								<Shops />
								{children}
							</div>
						) : (
							<>{children}</>
						)}
					</div>
				</main>
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
