'use client'
import DashboardHeader from "@/components/layout/Dashboardheader"
import DashboardSidebar from "@/components/layout/DashboardSidebar"
import { useState } from "react";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="md:pl-[64px] lg:pl-[223px] max-sm:pt-16 text-paragraph transition-all duration-300">
            <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)}/>
            <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
            <div className="p-4">{children}</div> 
        </div>
    )
}

export default DashboardLayout