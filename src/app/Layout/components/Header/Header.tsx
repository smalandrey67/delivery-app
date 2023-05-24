import Link from "next/link";

import styles from "./Header.module.scss";

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<div className="container">
				<nav>
					<ul className={styles.navbarList}>
						<li className={styles.navbarItem}>
							<Link href="/">Shop</Link>
						</li>
						<li className={styles.navbarItem}>
							<Link href="/shopping-cart">Shopping Cart</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
