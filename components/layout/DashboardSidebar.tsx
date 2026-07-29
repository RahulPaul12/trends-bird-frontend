'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import fabimage from "@/public/images/fabicon.png"
import avatar from "@/public/images/avatar.png"
import { CircleX } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation/seed";
import pattern from "@/public/images/Patterns.svg";

const DashboardSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const pathname = usePathname();
  
  return (
    <>
    {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 tablet:hidden" onClick={onClose} />
      )}
    <aside id="admin-sidebar" className={`overflow-auto flex flex-col justify-between sidebar z-40 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          tablet:translate-x-0`}>
      <nav className="db-sidebar-nav">
        <div className="db-sidebar">
            <Link href={"/"} className="w-32 shrink-0 block tablet:hidden lg:block">
              <Image src={logo} alt="logo" />
            </Link>
            <Link href={"/"} className="w-fit shrink-0 hidden tablet:block lg:hidden">
              <Image src={fabimage} alt="logo" />
            </Link>
          <button onClick={onClose} className="xmark-btn md:hidden block">
            <CircleX size={16} color="#e12323" />
          </button>
        </div>
        <Link href={"#"} className="max-sm:hidden flex lg:hidden justify-center items-center">
             <Image className="h-9 w-9 rounded-md"  src={avatar} alt="avatar" width={100} height={100}/>
        </Link>
        <div className="p-2 rounded-lg bg-[#F0F0F0] mb-3 max-lg:hidden max-sm:block block">
            <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-md flex items-center justify-center bg-white text-xs font-bold">
                  <Image src={avatar} alt="avatar" width={100} height={100}/>
                </div>
                <div className="flex-auto">
                    <p className="text-sm font-semibold">John Doe</p>
                    <span className="text-paragraph text-xs">Admin</span>
                </div>
                <i className="icon-arrow-down"></i>
            </div>
        </div>
        <ul className="db-sidebar-nav-list mb-4 pb-6 border-b border-[#F0F0F0]">
          {navItems.map((item) => {
            const itemPath = item.href.split("?")[0]
            const isActive = pathname === itemPath;
            return (
              <li
                key={item.id}
                className={`db-sidebar-nav-item ${isActive ? "active" : ""}`}
              >
                <Link href={item.href} className="db-sidebar-nav-menu" id={item.id}>
                  <i className={`${item.icon} shrink-0`} aria-hidden="true" />
                  <span className="text-sm font-semibold flex-auto">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="db-sidebar-nav-list mb-6">
              <li className={`db-sidebar-nav-item }`}>
                <Link href={"#"} className="db-sidebar-nav-menu relative">
                  <i className={`icon-chatdots shrink-0`} aria-hidden="true" />
                  <span className="max-sm:hidden md:block lg:hidden w-2 h-2 rounded-full bg-primary absolute right-3 top-1/2 -translate-y-1/2"></span>
                  <span className="text-sm font-semibold flex-auto flex-nowrap items-center justify-between gap-2 max-sm:block md:hidden lg:flex">
                    Message
                    <p className="block w-fit h-5 leading-5 px-1.5 text-white text-xs bg-primary rounded-lg">19</p>
                  </span>
                </Link>
              </li>
              <li className={`db-sidebar-nav-item }`}>
                <Link href={"#"} className="db-sidebar-nav-menu relative">
                  <i className={`icon-notification shrink-0`} aria-hidden="true" />
                  <span className="max-sm:hidden md:block lg:hidden w-2 h-2 rounded-full bg-primary absolute right-3 top-1/2 -translate-y-1/2"></span>
                  <span className="text-sm font-semibold flex-auto flex-nowrap items-center justify-between gap-2 max-sm:block md:hidden lg:flex">
                    Notifications
                    <p className="block w-fit h-5 leading-5 px-1.5 text-white text-xs bg-primary rounded-lg">19</p>
                  </span>
                </Link>
              </li>
              <li className={`db-sidebar-nav-item }`}>
                <Link href={"#"} className="db-sidebar-nav-menu">
                  <i className={`icon-gearsix shrink-0`} aria-hidden="true" />
                  <span className="text-sm font-semibold flex-auto">
                    Setting
                  </span>
                </Link>
              </li>
        </ul>
        <div className="bg-[#333333] py-6 px-4 rounded-xl text-white relative lg:block md:hidden block">
            <Image className="absolute top-0 right-0 max-w-[55px] h-auto" width={100} height={100} src={pattern} alt="pattern"/>
            <h6 className="text-2xl font-bold mb-3">Loving ShipNow Free?</h6>
            <p className="text-xs mb-5">Go Pro to access priority support, real-time tracking, and full analytics.</p>
            <button className="h-11 w-full rounded-lg bg-white text-base font-semibold text-black">Go Pro Today</button>
        </div>
      </nav>
    </aside>
    </>
  );
};

export default DashboardSidebar;