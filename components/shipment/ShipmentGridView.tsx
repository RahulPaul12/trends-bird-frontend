import { Shipment } from "@/types"
import Image from "next/image"
type ShipmentGridViewProps = {
    shipment: Shipment[];
};

const ShipmentGridView = ({shipment}:ShipmentGridViewProps) => {
    return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
                {
                    shipment.map((item:Shipment)=>(
                    <div className="col-span-1 lg:col-span-3" key={item.id}>
                    <div className="db-card">
                        <div className="flex justify-between items-center gap-2 mb-4">
                            <div>
                                <h2 className="text-sm font-bold mb-3 leading-tight">{item.shipping_id}</h2>
                                <span className="w-fit text-[10px] font-semibold px-2 bg-[#E3DDFF] rounded-full h-4.25 flex items-center">{item.status}</span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#E0E0E0] flex items-center justify-center text-xl">
                                <i></i>
                            </div>
                        </div>
                        <div className="border-t border-[#E0E0E0] pt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Image src={item.company.logo} alt="location" width={36} height={36} />
                                <div>
                                    <h6 className="text-xs font-semibold mb-0.5">{item.company.name}</h6>
                                    <p className="text-[10px]">{item.company.company_type}</p>
                                </div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[#F5F5F5] mb-4">
                                <div className="flex w-full flex-col items-start">
                                    <div className="group flex gap-x-6 w-full">
                                        <div className="relative">
                                            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#E3DDFF]"></div>
                                            <span className="relative z-10 grid h-4.5 w-4.5 place-items-center rounded-full bg-[#E3DDFF] text-primary"></span>
                                        </div>
                                        <div className="pb-5 text-slate-600 w-full">
                                            <div className="flex justify-between items-start">
                                                <p className="text-[10px] text-paragraph">Origin</p>
                                                <div>
                                                    <p className="text-xs font-semibold">{item.destination.origin.address}</p>
                                                    <span className="text-[10px] text-paragraph">{item.destination.origin.date_time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group flex gap-x-6 w-full">
                                        <div className="relative">
                                            <span className="relative z-10 grid h-4.5 w-4.5 place-items-center rounded-full bg-[#E3DDFF] text-primary"></span>
                                        </div>
                                        <div className="text-slate-600 w-full">
                                            <div className="flex justify-between items-start">
                                                <p className="text-[10px] text-paragraph">Destination</p>
                                                <div>
                                                    <p className="text-xs font-semibold">{item.destination.destination.address}</p>
                                                    <span className="text-[10px] text-paragraph">{item.destination.destination.date_time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <p><span className="text-[10px] text-paragraph">Progress</span><span className="ml-1 text-xs font-bold">{item.destination.progress}</span></p>
                                        <p><span className="text-[10px] text-paragraph">Carriers</span><span className="ml-1 text-xs font-bold">{item.destination.delivery_company}</span></p>
                                    </div>
                                    <div className="flex-start flex h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
                                        <div className={`flex items-center justify-center h-full overflow-hidden text-white bg-primary rounded-full`} style={{ width: `${item.destination.progress}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    ))
                }
            </div>
    )
}

export default ShipmentGridView