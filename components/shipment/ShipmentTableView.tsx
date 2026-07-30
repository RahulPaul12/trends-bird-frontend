import { Shipment } from "@/types";
import Image from "next/image"
import Link from "next/link"
type ShipmentGridViewProps = {
    shipment: Shipment[];
};
const ShipmentTableView = ({shipment}:ShipmentGridViewProps) => {
    return (
        <section>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                <div className="db-card w-full">
                    <div className="flex justify-between mb-5">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-[#E3DDFF] flex justify-center items-center">
                                <i className="icon-shipments text-sm text-primary"></i>
                            </div>
                            <span className="text-xs font-semibold text-paragraph">Delivery</span>
                        </div>
                        <button className="max-sm:hidden w-5.5 h-5.5 rounded-md bg-[#F0F0F0] flex items-center justify-center">
                            <i className="icon-more text-sm text-paragraph"></i>
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
                <div className="db-card w-full">
                    <div className="flex justify-between mb-5">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-[#E3DDFF] flex justify-center items-center">
                                <i className="icon-shipments text-sm text-primary"></i>
                            </div>
                            <span className="text-xs font-semibold text-paragraph">Delivery</span>
                        </div>
                        <button className="max-sm:hidden w-5.5 h-5.5 rounded-md bg-[#F0F0F0] flex items-center justify-center">
                            <i className="icon-more text-sm text-paragraph"></i>
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
                <div className="db-card w-full">
                    <div className="flex justify-between mb-5">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-[#E3DDFF] flex justify-center items-center">
                                <i className="icon-shipments text-sm text-primary"></i>
                            </div>
                            <span className="text-xs font-semibold text-paragraph">Delivery</span>
                        </div>
                        <button className="max-sm:hidden w-5.5 h-5.5 rounded-md bg-[#F0F0F0] flex items-center justify-center">
                            <i className="icon-more text-sm text-paragraph"></i>
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
                <div className="db-card w-full">
                    <div className="flex justify-between mb-5">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-[#E3DDFF] flex justify-center items-center">
                                <i className="icon-checksquare text-sm text-primary"></i>
                            </div>
                            <span className="text-xs font-semibold text-paragraph">Delivery</span>
                        </div>
                        <button className="max-sm:hidden w-5.5 h-5.5 rounded-md bg-[#F0F0F0] flex items-center justify-center">
                            <i className="icon-more text-sm text-paragraph"></i>
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
                    <div className="flex gap-2 bg-[#F0F0F0] rounded-lg max-sm:w-full overflow-auto">
                        <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-white bg-black`}>All</button>
                        <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-paragraph bg-[#F0F0F0]`}>Completed</button>
                        <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-paragraph bg-[#F0F0F0]`}>Delivery</button>
                        <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-paragraph bg-[#F0F0F0]`}>Delivered</button>
                    </div>
                    <div className="rounded-lg bg-[#F0F0F0] w-full p-2 max-sm:flex hidden shrink-0!">
                       <div className="flex items-center justify-between w-full gap-2">
                           <form className="flex min-w-0 items-center gap-2 h-9 p-2.5">
                               <button type="submit" className="shrink-0">
                                   <i className="icon-search"></i>
                               </button>
                               <input
                                   type="text"
                                   placeholder="Search invoices"
                                   className="px-2 outline-none min-w-0 w-full"
                               />
                           </form>
                           <div className="flex gap-2 items-center shrink-0!">
                               <button className="h-9 w-9 rounded-lg bg-[#F0F0F0] flex justify-center items-center shrink-0">
                                   <i className="icon-fadershorizontal"></i>
                               </button>
                               <Link
                                   href="/shipments/new"
                                   className="bg-black text-white px-4 h-9 rounded-lg flex items-center text-xs font-semibold shrink-0"
                               >
                                   + <span className="max-lg:hidden">New Shipment</span>
                               </Link>
                           </div>
                       </div>
                    </div>
                    <div className="flex gap-2.5 max-sm:hidden">
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
                                 <div className="custom-checkbox">
                                    <input type="checkbox" id="remember" className="custom-checkbox-field"/>
                                    <i className="icon-check custom-checkbox-icon"></i>
                                </div>
                                </th>
                                <th className="px-2.5 py-3.5 text-[10px]">Shipping ID <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Company <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Carries <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Product Category <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Wight <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Route <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Date <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Progress <button><i className="icon-sort text-sm"></i></button></th>
                                <th className="px-2.5 py-3.5 text-[10px]">Status <button><i className="icon-sort text-sm"></i></button></th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E0E0E0]">
                                {
                                    shipment.map((item:Shipment)=>(
                                        <tr key={item.id}>
                                            <td className="px-2.5 py-3">
                                                <div className="custom-checkbox">
                                                    <input type="checkbox" id="remember" className="custom-checkbox-field"/>
                                                    <i className="icon-check custom-checkbox-icon"></i>
                                                </div>
                                            </td>
                                            <td className="px-2.5 py-3 text-[11px] font-semibold text-primary">{item.shipping_id}</td>
                                            <td className="px-2.5 py-3">
                                              <div className="flex items-center gap-1">
                                                <Image width={20} height={20} src={item.company.logo} alt="logo"/>
                                                <span className="text-[11px] font-semibold">{item.company.name}</span>
                                              </div>
                                            </td>
                                            <td className="px-2.5 py-3 text-[11px] font-semibold text-paragraph">{item.destination.delivery_company}</td>
                                            <td className="px-2.5 py-3 text-[11px] font-semibold text-paragraph">{item.company.company_type}</td>
                                            <td className="px-2.5 py-3 text-[11px] font-semibold text-paragraph">{item.weight}</td>
                                            <td className="px-2.5 py-3">
                                              <p className="text-[11px]">{item.destination.origin.address} <span className="text-[10px] text-paragraph">(Origin)</span></p>
                                              <p className="text-[11px]">{item.destination.destination.address}<span className="text-[10px] text-paragraph">(Destination)</span></p>
                                            </td>
                                            <td className="px-2.5 py-3">
                                              <p className="text-[11px]">{item.destination.origin.date_time} <span className="text-[10px] text-paragraph">(ATD)</span></p>
                                              <p className="text-[11px]">{item.destination.destination.date_time}<span className="text-[10px] text-paragraph">(ETA)</span></p>
                                            </td>
                                            <td className="px-2.5 py-3 text-[11px] font-semibold">
                                                <div className="flex items-center gap-1">
                                                    <div className="flex-start flex h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
                                                        <div className={`flex items-center justify-center h-full overflow-hidden text-white bg-primary rounded-full`} style={{ width: `${item.destination.progress}%` }}></div>
                                                    </div>
                                                    <span className="text-[10px] text-paragraph">{item.destination.progress}%</span>
                                                </div>
                                            </td>
                                            <td className="px-2.5 py-3"><span className="px-1.5 py-0.5 text-[10px] font-semibold text-primary bg-[#E3DDFF] rounded-full">{item.status}</span></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                      </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShipmentTableView