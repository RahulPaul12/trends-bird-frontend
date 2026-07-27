'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import fabimage from "@/public/images/fabicon.png"
import { CircleX } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation/seed";

const DashboardSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const pathname = usePathname();

  return (
    <>
    {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 tablet:hidden" onClick={onClose} />
      )}
    <aside id="admin-sidebar" className={`sidebar z-40 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          tablet:translate-x-0`}>
      <nav className="db-sidebar-nav">
        <div className="db-sidebar-header">
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
        <ul className="db-sidebar-nav-list">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
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
      </nav>
    </aside>
    </>
  );
};

export default DashboardSidebar;