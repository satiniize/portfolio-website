'use client'

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

function NavItem({ href, title } : {href: string; title: string}) {
	return (
		<li>
			<Link href={href}className="block bg-black h-12 w-full flex p-4 items-center text-white  hover:bg-white hover:text-black cursor-pointer duration transition-colors">
				{title}
			</Link>
		</li>

	);
}

export default function Header() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
	// Contains header and sidebar
	    <div className="relative">
			{/* Header */}
			<div className="bg-black border-white border-b px-2 h-12 flex items-center fixed top-0 w-full z-20">
				<button
				  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				  className="bg-black text-white rounded-lg w-8 h-8 hover:bg-white hover:text-black cursor-pointer transition-colors"
				>
			  		☰
				</button>
				<span className="bg-black h-8 px-2 flex items-center">
					Rayhan / satiniize
				</span>
				<button
				  // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				  className="bg-black text-white ml-auto rounded-lg w-8 h-8 hover:bg-white hover:text-black cursor-pointer transition-colors"
				>
			  		◐
				</button>
			</div>

			{/* Sidebar */}
			<div
				className={`flex flex-col bg-black border-white border-r w-48 h-full fixed top-0 pt-12 left-0 z-10 transition-transform duration-200 transform ${
				isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<ul>
					<NavItem href="/" title="Home" />
					<NavItem href="/blog" title="Blog" />
					<NavItem href="/projects" title="Projects" />
					<NavItem href="/photography" title="Photography" />
				</ul>
				<h1 className="block mt-auto mx-4 mb-4">Built with pride and passion,</h1>
			</div>
	    </div>
	);
}
