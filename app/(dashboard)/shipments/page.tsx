'use client'

import Link from "next/link";
import shipment from "@/data/shipment/seed"
import ShipmentGridView from "@/components/shipment/ShipmentGridView";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ShipmentTableView from "@/components/shipment/ShipmentTableView";
const ShipmentsPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const view = searchParams.get("view") === "table" ? "table" : "grid";
    const handleViewChange = (newView: "grid" | "table") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", newView);
    router.push(`${pathname}?${params.toString()}`);

    };
    return (
        <section>
            <div className="flex justify-between items-center mb-5 max-sm:hidden">
                <div>
                    <h2 className="text-2xl font-bold">Shipments</h2>
                    <div className="db-breadcrumb">
                        <ul className="db-breadcrumb-list">
                            <li className="db-breadcrumb-item"><Link className="db-breadcrumb-link" href="/dashboard">Dashboard</Link></li>                   
                            <li className="db-breadcrumb-item">Shipments</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#F0F0F0] rounded-lg p-1">
                        <button onClick={() => handleViewChange("grid")} className={`px-3 h-8 rounded-md text-xs font-semibold transition-colors ${view === "grid" ? "bg-white shadow-sm" : "text-paragraph"}`}>Grid</button>
                        <button onClick={() => handleViewChange("table")} className={`px-3 h-8 rounded-md text-xs font-semibold transition-colors ${view === "table" ? "bg-white shadow-sm" : "text-paragraph"}`}>Table
                        </button>
                    </div>
                    <Link href="/shipments/new" className="bg-black text-white px-4 h-10 rounded-lg flex items-center">+ New Shipment</Link>
                </div>
            </div>
            {view === "grid" ?
            (<ShipmentGridView shipment={shipment}/>) : ( <ShipmentTableView/>)
             }
        </section>
    );
};

export default ShipmentsPage;