import React from 'react';
import Link from 'next/link';

function NavItem({ href, title }) {
	return (
		<Link href={href}className="bg-black text-white font-bold rounded-lg px-2 py-0 hover:bg-white hover:text-black cursor-pointer transition-colors">
			{title}
		</Link>
	);
}

export default function NavBar() {
	return (
		<div className="bg-black p-4 flex items-center justify-between fixed top-0 w-full">
			<nav className="bg-black flex items-center space-x-4">
				<NavItem href="/" title="Home" />
				<NavItem href="/blog" title="Blog" />
				<NavItem href="/projects" title="Projects" />
				<NavItem href="/photography" title="Photography" />
			</nav>
			<h1 className="ml-auto">
				Rayhan / satiniize
			</h1>
		</div>
	);
}
