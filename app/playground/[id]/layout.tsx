import { SidebarProvider } from "@/components/ui/sidebar"
import React from "react"

export default async function Playgroundlayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}