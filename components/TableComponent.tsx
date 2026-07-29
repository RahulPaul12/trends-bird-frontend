import Image from "next/image"

const TableComponent = () => {
    return (
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
    )
}

export default TableComponent