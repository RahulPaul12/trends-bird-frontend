import { Shipment } from "@/types";
import Image from "next/image"
type DashboardViewProps = {
    shipmentData: Shipment[];
};
const DashboardTableComponent = ({ shipmentData }: DashboardViewProps) => {
    return (
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
                        <th className="px-2.5 py-3.5 text-[10px]">Invoice ID <button><i className="icon-sort text-sm"></i></button></th>
                        <th className="px-2.5 py-3.5 text-[10px]">Company <button><i className="icon-sort text-sm"></i></button></th>
                        <th className="px-2.5 py-3.5 text-[10px]">Shipping ID <button><i className="icon-sort text-sm"></i></button></th>
                        <th className="px-2.5 py-3.5 text-[10px]">Date <button><i className="icon-sort text-sm"></i></button></th>
                        <th className="px-2.5 py-3.5 text-[10px]">Amount <button><i className="icon-sort text-sm"></i></button></th>
                        <th className="px-2.5 py-3.5 text-[10px]">Status <button><i className="icon-sort text-sm"></i></button></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E0E0E0]">
                      {
                        shipmentData.map((item)=> (
                          <tr key={item.id}>
                            <td className="px-2.5 py-3">
                              <div className="custom-checkbox">
                                  <input type="checkbox" id="remember" className="custom-checkbox-field"/>
                                  <i className="icon-check custom-checkbox-icon"></i>
                              </div>
                            </td>
                            <td className="px-2.5 py-3 text-[11px] font-semibold text-primary">{item.invoice_id}</td>
                            <td className="px-2.5 py-3">
                              <div className="flex items-center gap-1">
                                <Image width={20} height={20} src={item.company.logo} alt="logo"/>
                                <span className="text-[11px] font-semibold">{item.company.name}</span>
                              </div>
                            </td>
                            <td className="px-2.5 py-3 text-[11px] font-semibold text-paragraph">{item.shipping_id}</td>
                            <td className="px-2.5 py-3">
                              <p className="text-[11px]">{item.destination.origin.date_time} <span className="text-[10px] text-paragraph">(Issued)</span></p>
                              <p className="text-[11px]">{item.destination.destination.date_time} <span className="text-[10px] text-paragraph">(Due)</span></p>
                            </td>
                            <td className="px-2.5 py-3 text-[11px] font-semibold">{item.amount}</td>
                            <td className="px-2.5 py-3"><span className="px-1.5 py-0.5 text-[10px] font-semibold text-primary bg-[#E3DDFF] rounded-full">{item.status}</span></td>
                        </tr>
                        ))
                      }
                    </tbody>
              </table>
            </div>
        </div>
    )
}   

export default DashboardTableComponent