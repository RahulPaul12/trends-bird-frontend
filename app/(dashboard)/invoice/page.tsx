import Link from "next/link"

const Invoice = () => {
    return (
        <section>
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h2 className="text-2xl font-bold">Invoices & Billing</h2>
                    <div className="db-breadcrumb">
                        <ul className="db-breadcrumb-list">
                            <li className="db-breadcrumb-item"><Link className="db-breadcrumb-link" href="/dashboard">Dashboard</Link></li>                   
                            <li className="db-breadcrumb-item">Invoices & Billing</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                    <form className="flex items-center gap-2 h-10 p-2.5 rounded-lg bg-[#FEFEFE]">
                        <button type="submit">Search</button>
                        <input type="text" placeholder="Search anything" className="px-2 outline-none"/>
                    </form>
                </div>
            </div>
            <div className="flex gap-5 mb-5">
                <div className="db-card w-full">
                    <p className="text-xs text-paragraph mb-3">Total SKU</p>
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-bold leading-tight">285</span>
                        <span className="px-1 py-0.5 text-[10px] font-semibold text-[#007837] bg-[#D9F9E7] rounded-full">+2.58%</span>
                    </div>
                </div>
                <div className="db-card w-full">
                    <p className="text-xs text-paragraph mb-3">Total SKU</p>
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-bold leading-tight">285</span>
                        <span className="px-1 py-0.5 text-[10px] font-semibold text-[#007837] bg-[#D9F9E7] rounded-full">+2.58%</span>
                    </div>
                </div>
                <div className="db-card w-full">
                    <p className="text-xs text-paragraph mb-3">Total SKU</p>
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-bold leading-tight">285</span>
                        <span className="px-1 py-0.5 text-[10px] font-semibold text-[#007837] bg-[#D9F9E7] rounded-full">+2.58%</span>
                    </div>
                </div>
                <div className="db-card w-full">
                    <p className="text-xs text-paragraph mb-3">Total SKU</p>
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-bold leading-tight">285</span>
                        <span className="px-1 py-0.5 text-[10px] font-semibold text-[#007837] bg-[#D9F9E7] rounded-full">+2.58%</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[678fr_479fr] gap-5 mb-5">
                <div className="col-span-1">
                    <div className="db-card">

                    </div>
                </div>
                <div className="col-span-1 hidden">
                    <div className="db-card h-full">
                        <h6 className="text-base font-semibold mb-3">Warehouse Activity Log</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Invoice