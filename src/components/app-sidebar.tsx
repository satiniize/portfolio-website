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
    <Sidebar className="transition-all duration-200 ease-in-out" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Built with pride and passion,</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
