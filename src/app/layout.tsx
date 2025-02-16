import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from 'next/font/google';
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

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
		<html lang="en" className={atkinsonHyperlegible.className}>
			<body className="">
				<SidebarProvider>
					<AppSidebar/>
					<main className="w-full">
						<SidebarTrigger className="fixed w-8 h-8 m-4 bg-sidebar border shadow rounded-none z-20"/>
						{children}
					</main>
				</SidebarProvider>
			</body>
		</html>
	)
}