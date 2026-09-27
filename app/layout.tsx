import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={outfit.className}>
			<body>{children}</body>
		</html>
	);
}
