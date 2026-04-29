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
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}