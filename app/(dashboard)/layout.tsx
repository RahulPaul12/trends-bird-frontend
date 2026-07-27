'use client'
import DashboardHeader from "@/components/layout/Dashboardheader"
import DashboardSidebar from "@/components/layout/DashboardSidebar"
import DashboardFooter from "@/components/layout/Dashbordfooter";
import { useState } from "react";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="h-dvh md:pl-16 lg:pl-55.75 max-sm:pt-16 transition-all duration-300">
            <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)}/>
            <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
            <div className="p-5 bg-[#F0F0F0]">{children}</div> 
            <DashboardFooter/>
        </div>
    )
}

export default DashboardLayout