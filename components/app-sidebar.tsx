"use client"

import * as React from "react"
import {Gamepad, GaugeCircle, SquareTerminal,} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {NavUser} from "@/components/nav-user"
import {TeamSwitcher} from "@/components/team-switcher"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    user: {
        name: "GameWatcher",
        email: "contact@gamewatcher.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Elbarto Server",
            logo: Gamepad,
            plan: "Premium",
        },
        {
            name: "SNEK",
            logo: GaugeCircle,
            plan: "Basic",
        }
    ],
    navMain: [
        {
            title: "Your GameWatcher",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Watched Games",
                    url: "#",
                },
                {
                    title: "Configuration",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        /*{
          name: "Design Engineering",
          url: "#",
          icon: Frame,
        },
        {
          name: "Sales & Marketing",
          url: "#",
          icon: PieChart,
        },
        {
          name: "Travel",
          url: "#",
          icon: Map,
        },*/
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams}/>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                {/*<NavProjects projects={data.projects}/>*/}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
