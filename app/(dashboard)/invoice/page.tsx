import InvoiceTableComponent from "@/components/InvoiceTableComponent"
import Link from "next/link"
import shipmentData from "@/data/shipment/seed"
const Invoice = () => {
    return (
        <section>
            <div className="flex justify-between items-center mb-5 max-sm:hidden">
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
                    <form className="flex items-center gap-1.5 h-10 p-2.5 rounded-lg bg-[#FEFEFE]">
                        <button type="submit" className="flex items-center justify-center"><i className="icon-search text-xl"></i></button>
                        <input type="text" placeholder="Search anything" className="px-2 outline-none"/>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                <div className="db-card w-full md:px-6 flex max-sm:flex-col gap-4 max-sm:items-start justify-between items-center">
                    <div className="w-[52px] h-[52px] rounded-lg bg-primary flex justify-center items-center">
                        <i className="icon-sealcheck text-[28px] text-white"></i>
                    </div>
                    <div className="max-sm:text-start text-end">
                        <span className="text-xs font-semibold text-paragraph mb-2 leading-tight">Paid Invoices</span>
                        <p className="text-[28px] font-bold">$28,890</p>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-paragraph">from</span>
                            <span className="px-1.5 text-[10px] font-semibold text-[#007837] bg-[#D9F9E7] rounded-full">350</span>
                            <span className="text-xs text-paragraph">invoices</span>
                        </div>
                    </div>
                </div>
                <div className="db-card w-full md:px-6 flex max-sm:flex-col gap-4 max-sm:items-start justify-between items-center">
                    <div className="w-[52px] h-[52px] rounded-lg bg-primary flex justify-center items-center">
                        <i className="icon-receiptx text-[28px] text-white"></i>
                    </div>
                    <div className="max-sm:text-start text-end">
                        <span className="text-xs font-semibold text-paragraph mb-2 leading-tight">Paid Invoices</span>
                        <p className="text-[28px] font-bold">$28,890</p>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-paragraph">from</span>
                            <span className="px-1.5 text-[10px] font-semibold text-[#007837] bg-[#D9F9E7] rounded-full">350</span>
                            <span className="text-xs text-paragraph">invoices</span>
                        </div>
                    </div>
                </div>
                <div className="db-card w-full md:px-6 flex max-sm:flex-col gap-4 max-sm:items-start justify-between items-center">
                    <div className="w-[52px] h-[52px] rounded-lg bg-primary flex justify-center items-center">
                        <i className="icon-circledashed text-[28px] text-white"></i>
                    </div>
                    <div className="max-sm:text-start text-end">
                        <span className="text-xs font-semibold text-paragraph mb-2 leading-tight">Paid Invoices</span>
                        <p className="text-[28px] font-bold">$28,890</p>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-paragraph">from</span>
                            <span className="px-1.5 text-[10px] font-semibold text-[#007837] bg-[#D9F9E7] rounded-full">350</span>
                            <span className="text-xs text-paragraph">invoices</span>
                        </div>
                    </div>
                </div>
                <div className="db-card w-full md:px-6 flex max-sm:flex-col gap-4 max-sm:items-start justify-between items-center">
                    <div className="w-[52px] h-[52px] rounded-lg bg-primary flex justify-center items-center">
                        <i className="icon-circledashed text-[28px] text-white"></i>
                    </div>
                    <div className="max-sm:text-start text-end">
                        <span className="text-xs font-semibold text-paragraph mb-2 leading-tight">Paid Invoices</span>
                        <p className="text-[28px] font-bold">$28,890</p>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-paragraph">from</span>
                            <span className="px-1.5 text-[10px] font-semibold text-[#007837] bg-[#D9F9E7] rounded-full">350</span>
                            <span className="text-xs text-paragraph">invoices</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[678fr_479fr] gap-5 mb-5">
                <div className="col-span-1">
                    <div className="db-card">
                        <div className="flex justify-between items-center mb-4">
                            <h6 className="text-base font-semibold">Invoices</h6>
                            <div className="flex items-center gap-2.5">
                                <form className="flex items-center gap-2 h-7 p-2.5 rounded-lg bg-[#F0F0F0]">
                                    <button type="submit"><i className="icon-search"></i></button>
                                    <input type="text" placeholder="Search invoices" className="px-2 outline-none max-sm:hidden"/>
                                </form>
                                <button className="h-7 w-7 rounded-lg bg-[#F0F0F0] flex justify-center items-center"><i className="icon-fadershorizontal"></i></button>
                                <Link href="/shipments/new" className="bg-black text-white px-4 h-7 rounded-lg flex items-center text-xs font-semibold">+ <span className="max-sm:hidden">New Shipment</span></Link>
                            </div>
                        </div>
                        <InvoiceTableComponent shipment={shipmentData}/>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="db-card h-full">
                        <div className="flex justify-between items-center mb-4">
                            <h6 className="text-base font-semibold">Invoice Details</h6>
                            <div className="flex items-center gap-2.5">
                                <Link href="/shipments/new" className="bg-[#F0F0F0] text-black px-4 h-7 rounded-lg flex items-center text-xs font-semibold">Edit</Link>
                                <Link href="/shipments/new" className="bg-[#F0F0F0] text-black px-4 h-7 rounded-lg flex items-center text-xs font-semibold">Hold</Link>
                                <Link href="/shipments/new" className="bg-black text-white px-4 h-7 rounded-lg flex items-center text-xs font-semibold">Send Invoice</Link>
                            </div>
                        </div>
                        <div className="border rounded-xl border-[#E0E0E0] p-4">
                            <div className="flex items-center justify-between mb-5">
                                <div className="text-gray-700">
                                    <p className="leading-tight font-bold text-sm"><span>Invoice</span><span className="text-primary">#INV-1008</span></p>
                                    <span className="px-1.5 py-0.5 text-[10px] font-semibold text-primary bg-[#E3DDFF] rounded-full">Unpaid</span>
                                </div>
                                <div>
                                    <p className="leading-tight"><span className="text-[10px] text-paragraph">Issue Date:</span><span className="text-[11px] font-semibold">Mar 16, 2035</span></p>
                                    <p className="leading-tight"><span className="text-[10px] text-paragraph">Due Date:</span><span className="text-[11px] font-semibold">Mar 23, 2035</span></p>
                                </div>
                            </div>
                            <div className="bg-[#F5F5F5] p-3 rounded-lg mb-5">
                                <div className="flex justify-between mb-3">
                                    <div className="text-[10px] text-paragraph">Bill From</div>
                                    <div className="text-[10px] text-paragraph">Bill To</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <div className="text-base font-bold">ModaWear</div>
                                        <div className="text-[11px] text-paragraph">billing@modawear.com</div>
                                        <div className="text-[11px] text-paragraph max-w-[157px]">89 Franklin St, Boston, MA 02110, USA</div>
                                        <div className="text-[11px] text-paragraph max-w-[157px]">+1 617-555-2290</div>
                                    </div>
                                    <div className="text-end">
                                        <div className="text-base font-bold">ShipNow Logistics</div>
                                        <div className="text-[11px] text-paragraph">billing@modawear.com</div>
                                        <div className="text-[11px] text-paragraph max-w-[157px]">901 Distribution Ave, Charlotte, NC 28217, USA</div>
                                        <div className="text-[11px] text-paragraph max-w-[157px]">+1 704-555-9911</div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm font-semibold mb-4">Package Summary</p>
                            <div className="border rounded-lg border-[#E0E0E0] mb-5">
                                <table className="w-full text-left mb-2">
                                    <thead className="bg-[#F0F0F0]">
                                        <tr>
                                            <th className="text-paragraph text-[9px] font-normal p-2.5">Description</th>
                                            <th className="text-paragraph text-[9px] font-normal p-2.5">Quantity</th>
                                            <th className="text-paragraph text-[9px] font-normal p-2.5">Price</th>
                                            <th className="text-paragraph text-[9px] font-normal p-2.5">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-[#E0E0E0]">
                                            <td className="text-[10px] font-normal p-2.5">Product 1</td>
                                            <td className="text-[10px] font-normal p-2.5">1</td>
                                            <td className="text-[10px] font-normal p-2.5">$100.00</td>
                                            <td className="text-[10px] font-normal p-2.5">$100.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="max-w-[300px] ml-auto">
                                    <div className="flex justify-between mb-2">
                                    <div className="text-[10px] px-2.5 font-semibold text-paragraph">Subtotal:</div>
                                    <div className="text-[10px] px-2.5 font-semibold">$425.00</div>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <div className="text-[10px] px-2.5 font-semibold text-paragraph">Tax:</div>
                                    <div className="text-[10px] px-2.5 font-semibold">$25.50</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-[10px] px-2.5 font-semibold text-paragraph">Total:</div>
                                    <div className="text-[10px] px-2.5 font-semibold">$450.50</div>
                                </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-paragraph mb-2">Note</p>
                                <p className="text-[11px]">Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Invoice