import Link from "next/link"

const Invoice = () => {
    return (
        <section>
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h2 className="text-2xl font-bold">Invoice & Billing</h2>
                    <div className="db-breadcrumb">
                        <ul className="db-breadcrumb-list">
                            <li className="db-breadcrumb-item"><Link className="db-breadcrumb-link" href="/dashboard">Dashboard</Link></li>                   
                            <li className="db-breadcrumb-item">Invoice & Billing</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-5">
                <div className="col-span-12">
                    <div className="flex gap-5">
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
                </div> 
                <div className="col-span-2 lg:col-span-7">
                    <div className="db-card">
                        <div className="db-card-header border-none">
                            <h3 className="db-card-title">table with widgets</h3>
                        </div>
                        <div className="db-table-responsive">
                            <table className="db-table stripe">
                                <thead className="db-table-head">
                                    <tr className="db-table-head-tr">
                                        <th className="db-table-head-th">Name</th>
                                        <th className="db-table-head-th">code</th>
                                        <th className="db-table-head-th">category</th>
                                        <th className="db-table-head-th">price</th>
                                        <th className="db-table-head-th">status</th>
                                        <th className="db-table-head-th">action</th>
                                    </tr>
                                </thead>
                                <tbody className="db-table-body">
                                    <tr className="db-table-body-tr">
                                        <td className="db-table-body-td">miron mahmud</td>
                                        <td className="db-table-body-td">734974</td>
                                        <td className="db-table-body-td">jeans</td>
                                        <td className="db-table-body-td">$83.00</td>
                                        <td className="db-table-body-td"><span className="db-table-badge text-green-600 bg-green-100">active</span></td>
                                        <td className="db-table-body-td">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                 <div className="col-span-1 lg:col-span-5">
                    <div className="db-card h-full">
                        <h6 className="text-base font-semibold mb-3">Package status</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Invoice