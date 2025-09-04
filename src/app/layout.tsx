import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });


export const metadata = {
  title: "HappyBirthDay",
  description: "Wish you the best day ever",
  icons: {
    icon: "/subflower/d.png", // main favicon
    shortcut: "/subflower/d.png", // shortcut icon for some browsers
    apple: "/subflower/d.png", // iOS home screen
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
