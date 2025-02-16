import { Home, FileText, GitPullRequest, Camera } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
	{
		title: "Blog",
		url: "/blog",
		icon: FileText,
	},
	{
		title: "Projects",
		url: "/projects",
		icon: GitPullRequest,
	},
	{
		title: "Photography",
		url: "/photography",
		icon: Camera,
	},
]

export function AppSidebar() {
	return (
		<Sidebar className="transition-all duration-200 ease-in-out">
			<SidebarContent>
				<SidebarGroup className="p-0">
					<div className="w-full relative aspect-[3/2]">
						<Image 
							src="/Photos/RYHN6848.JPG"
							alt="Banner image"
							fill={true}
						/>
					</div>
					{/*<SidebarGroupLabel className="text-xs h-8">Built with pride and passion,</SidebarGroupLabel>*/}
					<SidebarGroupContent>
						<SidebarMenu className="gap-0">
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild className="h-12 rounded-none gap-0 p-0 m-0 border-b">
										<Link href={item.url} className="p-0 m-0 w-full">
											<item.icon className="m-4"/>
											<span className="text-base">{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup className="mt-auto p-4 border-t">
					<h1 className="text-xl font-bold">Contact me</h1>
					<ul>
						<li>
							<Link href="https://t.me/satiniize" className="hover:underline">Telegram</Link>
						</li>
						<li>
							<Link href="mailto:rayhansat1210@gmail.com" className="hover:underline">Email</Link>
						</li>
						<li>
							<Link href="https://www.linkedin.com/in/rayhan-nurdjaman/" className="hover:underline">LinkedIn</Link>
						</li>
						<li>
							<Link href="https://github.com/satiniize" className="hover:underline">GitHub</Link>            
						</li>
					</ul>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
