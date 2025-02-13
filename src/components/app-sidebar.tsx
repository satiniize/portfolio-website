import { Home, FileText, GitPullRequest, Camera } from 'lucide-react';
import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
    <Sidebar className="transition-all duration-200 ease-in-out shadow">
      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-xs h-8">Built with pride and passion,</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12 rounded-none gap-0 p-0">
                    <Link href={item.url}>
                      <item.icon className="m-4"/>
                      <span className="text-base">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <hr className="mt-auto mx-4"></hr>
        <SidebarGroup className="p-4">
          <h1 className="text-xl font-bold">Contact me</h1>
          <Link href="https://t.me/satiniize" className="block hover:underline">Telegram</Link>
          <Link href="mailto:rayhansat1210@gmail.com" className="block hover:underline">Email</Link>
          <Link href="https://www.linkedin.com/in/rayhan-nurdjaman/" className="block hover:underline">LinkedIn</Link>
          <Link href="https://github.com/satiniize" className="block hover:underline">GitHub</Link>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
