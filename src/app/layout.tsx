import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from 'next/font/google';
import "./globals.css";

import Footer from '@/components/footer';

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
			<body>
				<SidebarProvider>
					<AppSidebar/>
					<main className="p-4 w-full">
						<SidebarTrigger className="fixed bg-sidebar shadow border z-20"/>
						<div className="mx-auto max-w-4xl">
							{children}
							<Footer/>
						</div>
					</main>
				</SidebarProvider>
			</body>
		</html>
	)
}