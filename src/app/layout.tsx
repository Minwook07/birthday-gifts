import "./globals.css"

export const metadata = {
	title: "HappyBirthDay",
	description: "Wish you the best day ever",
	icons: {
		icon: "/subflower/d.png",
		shortcut: "/subflower/d.png",
		apple: "/subflower/d.png",
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}