'use client'

import Image from "next/image"
import fabimage from "@/public/images/fabicon.png"
import Link from "next/link"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { navItems } from "@/data/navigation/seed"

const DashboardHeader = ({ onMenuClick }: { onMenuClick: () => void }) => {
    const pathname = usePathname();
    const currentPage = navItems.find((item) => item.href === pathname);
    const displayTitle = currentPage?.label ?? "Dashboard";
    return (
        <nav className="md:hidden w-full flex items-center justify-between px-4 py-3 fixed top-0 left-0 z-30 bg-white">
            <Link href="/" className="logo"><Image src={fabimage} alt="logo"/></Link>
            <h6 className="text-base font-semibold">{displayTitle}</h6>
            <button onClick={onMenuClick}>
                <Menu size={32} color="#856df3"/>
            </button>
        </nav>
    )
}

export default DashboardHeader