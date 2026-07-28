import Image from "next/image";
import Link from "next/link";

const ShipmentsPage = () => {
    return (
        <section>
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h2 className="text-2xl font-bold">Shipments</h2>
                    <div className="db-breadcrumb">
                        <ul className="db-breadcrumb-list">
                            <li className="db-breadcrumb-item"><Link className="db-breadcrumb-link" href="/dashboard">Dashboard</Link></li>                   
                            <li className="db-breadcrumb-item">Shipments</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Link href="/shipments/new"><button className="bg-black text-white px-4 h-10 rounded-lg">+ New Shipment</button></Link>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                    <div className="db-card">
                        <div className="flex justify-between items-center gap-2 mb-4">
                            <div>
                                <h2 className="text-sm font-bold mb-3 leading-tight">#SH9283746</h2>
                                <span className="w-fit text-[10px] font-semibold px-2 bg-[#E3DDFF] rounded-full h-4.25 flex items-center">In Transit</span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#E0E0E0] flex items-center justify-center text-xl">
                                <i></i>
                            </div>
                        </div>
                        <div className="border-t border-[#E0E0E0] pt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Image src="/assets/svg/location.svg" alt="location" width={36} height={36} />
                                <div>
                                    <h6 className="text-xs font-semibold mb-0.5">Miron Mahmud</h6>
                                    <p className="text-[10px]">789 123 456</p>
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
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
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
                                                <p className="text-[10px] text-paragraph">Origin</p>
                                                <div>
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <p><span className="text-[10px] text-paragraph">Progress</span><span className="ml-1 text-xs font-bold">60%</span></p>
                                        <p><span className="text-[10px] text-paragraph">Carriers</span><span className="ml-1 text-xs font-bold">FedEx</span></p>
                                    </div>
                                    <div className="flex-start flex h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
                                        <div className="flex items-center justify-center w-[60%] h-full overflow-hidden text-white bg-primary rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="db-card">
                        <div className="flex justify-between items-center gap-2 mb-4">
                            <div>
                                <h2 className="text-sm font-bold mb-3 leading-tight">#SH9283746</h2>
                                <span className="w-fit text-[10px] font-semibold px-2 bg-[#E3DDFF] rounded-full h-4.25 flex items-center">In Transit</span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#E0E0E0] flex items-center justify-center text-xl">
                                <i></i>
                            </div>
                        </div>
                        <div className="border-t border-[#E0E0E0] pt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Image src="/assets/svg/location.svg" alt="location" width={36} height={36} />
                                <div>
                                    <h6 className="text-xs font-semibold mb-0.5">Miron Mahmud</h6>
                                    <p className="text-[10px]">789 123 456</p>
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
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
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
                                                <p className="text-[10px] text-paragraph">Origin</p>
                                                <div>
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <p><span className="text-[10px] text-paragraph">Progress</span><span className="ml-1 text-xs font-bold">60%</span></p>
                                        <p><span className="text-[10px] text-paragraph">Carriers</span><span className="ml-1 text-xs font-bold">FedEx</span></p>
                                    </div>
                                    <div className="flex-start flex h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
                                        <div className="flex items-center justify-center w-[60%] h-full overflow-hidden text-white bg-primary rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="db-card">
                        <div className="flex justify-between items-center gap-2 mb-4">
                            <div>
                                <h2 className="text-sm font-bold mb-3 leading-tight">#SH9283746</h2>
                                <span className="w-fit text-[10px] font-semibold px-2 bg-[#E3DDFF] rounded-full h-4.25 flex items-center">In Transit</span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#E0E0E0] flex items-center justify-center text-xl">
                                <i></i>
                            </div>
                        </div>
                        <div className="border-t border-[#E0E0E0] pt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Image src="/assets/svg/location.svg" alt="location" width={36} height={36} />
                                <div>
                                    <h6 className="text-xs font-semibold mb-0.5">Miron Mahmud</h6>
                                    <p className="text-[10px]">789 123 456</p>
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
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
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
                                                <p className="text-[10px] text-paragraph">Origin</p>
                                                <div>
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <p><span className="text-[10px] text-paragraph">Progress</span><span className="ml-1 text-xs font-bold">60%</span></p>
                                        <p><span className="text-[10px] text-paragraph">Carriers</span><span className="ml-1 text-xs font-bold">FedEx</span></p>
                                    </div>
                                    <div className="flex-start flex h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
                                        <div className="flex items-center justify-center w-[60%] h-full overflow-hidden text-white bg-primary rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="db-card">
                        <div className="flex justify-between items-center gap-2 mb-4">
                            <div>
                                <h2 className="text-sm font-bold mb-3 leading-tight">#SH9283746</h2>
                                <span className="w-fit text-[10px] font-semibold px-2 bg-[#E3DDFF] rounded-full h-4.25 flex items-center">In Transit</span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#E0E0E0] flex items-center justify-center text-xl">
                                <i></i>
                            </div>
                        </div>
                        <div className="border-t border-[#E0E0E0] pt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Image src="/assets/svg/location.svg" alt="location" width={36} height={36} />
                                <div>
                                    <h6 className="text-xs font-semibold mb-0.5">Miron Mahmud</h6>
                                    <p className="text-[10px]">789 123 456</p>
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
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
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
                                                <p className="text-[10px] text-paragraph">Origin</p>
                                                <div>
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <p><span className="text-[10px] text-paragraph">Progress</span><span className="ml-1 text-xs font-bold">60%</span></p>
                                        <p><span className="text-[10px] text-paragraph">Carriers</span><span className="ml-1 text-xs font-bold">FedEx</span></p>
                                    </div>
                                    <div className="flex-start flex h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
                                        <div className="flex items-center justify-center w-[60%] h-full overflow-hidden text-white bg-primary rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="db-card">
                        <div className="flex justify-between items-center gap-2 mb-4">
                            <div>
                                <h2 className="text-sm font-bold mb-3 leading-tight">#SH9283746</h2>
                                <span className="w-fit text-[10px] font-semibold px-2 bg-[#E3DDFF] rounded-full h-4.25 flex items-center">In Transit</span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#E0E0E0] flex items-center justify-center text-xl">
                                <i></i>
                            </div>
                        </div>
                        <div className="border-t border-[#E0E0E0] pt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Image src="/assets/svg/location.svg" alt="location" width={36} height={36} />
                                <div>
                                    <h6 className="text-xs font-semibold mb-0.5">Miron Mahmud</h6>
                                    <p className="text-[10px]">789 123 456</p>
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
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
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
                                                <p className="text-[10px] text-paragraph">Origin</p>
                                                <div>
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <p><span className="text-[10px] text-paragraph">Progress</span><span className="ml-1 text-xs font-bold">60%</span></p>
                                        <p><span className="text-[10px] text-paragraph">Carriers</span><span className="ml-1 text-xs font-bold">FedEx</span></p>
                                    </div>
                                    <div className="flex-start flex h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
                                        <div className="flex items-center justify-center w-[60%] h-full overflow-hidden text-white bg-primary rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="db-card">
                        <div className="flex justify-between items-center gap-2 mb-4">
                            <div>
                                <h2 className="text-sm font-bold mb-3 leading-tight">#SH9283746</h2>
                                <span className="w-fit text-[10px] font-semibold px-2 bg-[#E3DDFF] rounded-full h-4.25 flex items-center">In Transit</span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#E0E0E0] flex items-center justify-center text-xl">
                                <i></i>
                            </div>
                        </div>
                        <div className="border-t border-[#E0E0E0] pt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Image src="/assets/svg/location.svg" alt="location" width={36} height={36} />
                                <div>
                                    <h6 className="text-xs font-semibold mb-0.5">Miron Mahmud</h6>
                                    <p className="text-[10px]">789 123 456</p>
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
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
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
                                                <p className="text-[10px] text-paragraph">Origin</p>
                                                <div>
                                                    <p className="text-xs font-semibold">Los Angeles, CA</p>
                                                    <span className="text-[10px] text-paragraph">Mar 20, 2035 – 10:00 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <div className="flex items-center justify-between gap-4 mb-2">
                                        <p><span className="text-[10px] text-paragraph">Progress</span><span className="ml-1 text-xs font-bold">60%</span></p>
                                        <p><span className="text-[10px] text-paragraph">Carriers</span><span className="ml-1 text-xs font-bold">FedEx</span></p>
                                    </div>
                                    <div className="flex-start flex h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]">
                                        <div className="flex items-center justify-center w-[60%] h-full overflow-hidden text-white bg-primary rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShipmentsPage;