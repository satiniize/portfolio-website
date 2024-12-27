import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from 'next/font/google';
import "./globals.css";

import Header from '@/components/header';
import Footer from '@/components/footer';


const atkinsonHyperlegible = Atkinson_Hyperlegible({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const metadata: Metadata = {
	title: "By Rayhan",
	description: "A portfolio website of Rayhan's works",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
	return (
	<html lang="en">
		<body className={`${atkinsonHyperlegible.className} m-0 p-0`}>
			<Header />
			<div className="pt-16 px-4 max-w-4xl mx-auto">
				{children}
			</div>
			<Footer />
		</body>
	</html>
	);
}