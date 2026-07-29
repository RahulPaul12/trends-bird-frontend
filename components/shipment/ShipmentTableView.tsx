import Image from "next/image"
import Link from "next/link"

const ShipmentTableView = () => {
    return (
        <section>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                <div className="db-card w-full">
                    <div className="flex justify-between mb-5">
                        <div className="w-6 h-6 rounded-md bg-[#E3DDFF] flex justify-center items-center">
                            <i className="icon-truck text-sm text-primary"></i>
                        </div>
                        <button className="max-sm:hidden">
                            <i className="icon-info"></i>
                        </button>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <p className="text-[28px] font-bold leading-tight">2,950</p>
                        <div className="flex items-center gap-2">
                            <span className="w-[18px] h-[18px] rounded-full bg-[#D9F9E7] text-[#007837] flex items-center justify-center text-xs">
                                <i className="icon-arrow-down"></i>
                            </span>
                            <div className="flex justify-between items-center flex-row lg:flex-col">
                                <p className="leading-tight">
                                    <span className="text-[10px] text-paragraph">Up by</span>
                                    <span className="px-1 text-[10px] font-semibold text-[#007837] bg-[#F0F0F0] rounded-full">4.6%</span>
                                </p>
                                <span className="text-[10px] text-paragraph">this week</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="db-card">
                <div className="flex max-sm:flex-col gap-4 justify-between items-center mb-4 max-sm:w-full">
                    <div className="flex gap-2 bg-[#F0F0F0] rounded-lg max-sm:w-full">
                        <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-white bg-black`}>All</button>
                        <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-paragraph bg-[#F0F0F0]`}>Completed</button>
                        <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-paragraph bg-[#F0F0F0]`}>Delivery</button>
                        <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-paragraph bg-[#F0F0F0]`}>Delivered</button>
                    </div>
                    <div className="rounded-lg bg-[#F0F0F0] w-full p-2 max-sm:flex hidden ">
                        <div className="flex items-center justify-between w-full">
                            <form className="flex items-center gap-2 h-9 p-2.5">
                                <button type="submit"><i className="icon-search"></i></button>
                                <input type="text" placeholder="Search invoices" className="px-2 outline-none"/>
                            </form>
                            <div className="flex gap-2 items-center">
                                <button className="h-9 w-9 rounded-lg bg-[#F0F0F0] flex justify-center items-center"><i className="icon-fadershorizontal"></i></button>
                                <Link href="/shipments/new" className="bg-black text-white px-4 h-9 rounded-lg flex items-center text-xs font-semibold">+ <span className="max-lg:hidden">New Shipment</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2.5">
                        <form className="flex items-center gap-2 h-9 p-2.5 rounded-lg bg-[#F0F0F0]">
                            <button type="submit"><i className="icon-search"></i></button>
                            <input type="text" placeholder="Search invoices" className="px-2 outline-none max-lg:hidden"/>
                        </form>
                        <button className="h-9 w-9 rounded-lg bg-[#F0F0F0] flex justify-center items-center max-sm:hidden"><i className="icon-fadershorizontal"></i></button>
                        <Link href="/shipments/new" className="bg-black text-white px-4 h-9 rounded-lg flex items-center text-xs font-semibold max-sm:hidden">+ <span className="max-lg:hidden">New Shipment</span></Link>
                    </div>
                </div>
                <div className="w-full">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-max table-auto border-collapse bg-white text-left">
                            <thead>
                              <tr className="border-b border-[#E0E0E0]">
                                <th className="px-2.5 py-3.5 w-10">
                                  <input type="checkbox" className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                </th>
                                <th className="px-2.5 py-3.5 text-[10px]">Invoice ID <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Company <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Shipping ID <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Date <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Amount <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Status <button><i className="icon-sort text-sm"></i></button></th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E0E0E0]">
                                <tr>
                                    <td className="px-2.5 py-3">
                                      <input type="checkbox" className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </td>
                                    <td className="px-2.5 py-3">Jane Doe</td>
                                    <td className="px-2.5 py-3">
                                      <div className="flex items-center gap-1">
                                        <Image width={20} height={20} src="/images/shipment/techgear.png" alt="logo"/>
                                        <span className="text-[11px] font-semibold">TechGear Inc.</span>
                                      </div>
                                    </td>
                                    <td className="px-2.5 py-3 text-[11px] font-semibold text-paragraph">#SH9283746</td>
                                    <td className="px-2.5 py-3">
                                      <p className="text-[11px]">Mar 15, 2035 <span className="text-[10px] text-paragraph">(Issued)</span></p>
                                      <p className="text-[11px]">Mar 22, 2035 <span className="text-[10px] text-paragraph">(Due)</span></p>
                                    </td>
                                    <td className="px-2.5 py-3 text-[11px] font-semibold">$1,250.00</td>
                                    <td className="px-2.5 py-3"><span className="px-1.5 py-0.5 text-[10px] font-semibold text-primary bg-[#E3DDFF] rounded-full">Unpaid</span></td>
                                </tr>
                                <tr>
                                    <td className="px-2.5 py-3">
                                      <input type="checkbox" className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </td>
                                    <td className="px-2.5 py-3">Jane Doe</td>
                                    <td className="px-2.5 py-3">
                                      <div className="flex items-center gap-1">
                                        <Image width={20} height={20} src="/images/shipment/techgear.png" alt="logo"/>
                                        <span className="text-[11px] font-semibold">TechGear Inc.</span>
                                      </div>
                                    </td>
                                    <td className="px-2.5 py-3 text-[11px] font-semibold text-paragraph">#SH9283746</td>
                                    <td className="px-2.5 py-3">
                                      <p className="text-[11px]">Mar 15, 2035 <span className="text-[10px] text-paragraph">(Issued)</span></p>
                                      <p className="text-[11px]">Mar 22, 2035 <span className="text-[10px] text-paragraph">(Due)</span></p>
                                    </td>
                                    <td className="px-2.5 py-3 text-[11px] font-semibold">$1,250.00</td>
                                    <td className="px-2.5 py-3"><span className="px-1.5 py-0.5 text-[10px] font-semibold text-primary bg-[#E3DDFF] rounded-full">Unpaid</span></td>
                                </tr>
                            </tbody>
                      </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShipmentTableView