import BarChartComponent from "@/components/chart/BarChartComponent";
import PieChartComponent from "@/components/chart/PieChartComponent";
import StackChartComponent from "@/components/chart/StackChartComponent";
import DashboardTableComponent from "@/components/DashboardTableComponent";
import Link from "next/link";
import shipmentData from "@/data/shipment/seed"
import Image from "next/image";
import map from "@/public/images/Map-section.png"
const DashboardPage = () => {
    const sliceData = shipmentData.slice(0, 5);
    return (
        <section>
            <div className="flex justify-between items-center mb-5">
                <div>
                    <p className="text-base text-paragraph">Hello John!</p>
                    <h2 className="text-2xl font-bold">Good Morning</h2>
                </div>
                <div className="flex items-center gap-2.5">
                    <form className="flex items-center gap-2 h-10 p-2.5 rounded-lg bg-[#FEFEFE]">
                        <button type="submit">Search</button>
                        <input type="text" placeholder="Search anything" className="px-2 outline-none"/>
                    </form>
                    <Link href="/shipments/new" className="bg-black text-white px-4 h-10 rounded-lg flex items-center">+ Add New Shipping</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[858fr_299fr] gap-5 mb-5">
                <div className="col-span-1">
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
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-[369fr_469fr] gap-5">
                        <div className="col-span-1">
                            
                        </div>
                        <div className="col-span-1">
                            <div className="db-card h-full">
                                <h6 className="text-base font-semibold mb-3">Warehouse Activity Log</h6>
                                <BarChartComponent />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="db-card h-full">
                        <h6 className="text-base font-semibold mb-3">Warehouse Activity Log</h6>
                        <PieChartComponent series={[44, 55, 41]} categories={['Team A', 'Team B', 'Team C']}/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[858fr_299fr] gap-5 mb-5">
                <div className="col-span-1">
                    <div className="grid grid-cols-2 lg:grid-cols-[369fr_469fr] gap-5">
                        <div className="col-span-1">
                            <div className="db-card">
                                <StackChartComponent/>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="db-card">
                                <Image className="w-full max-h-[423px] object-fill" src={map} alt="profit-summary" width={299} height={473}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="db-card h-full">
                        <div className="flex justify-between items-center mb-4">
                            <h6 className="text-base font-semibold">Shipment Alerts</h6>
                            <button className="text-paragraph bg-[#F0F0F0] w-7 h-7 rounded-lg flex items-center justify-center text-base">
                                <i className="icon-more"></i>
                            </button>
                        </div>
                        <div className="mb-6">
                            <h6 className="text-2xl font-bold flex items-end gap-1 mb-5">12 <span className="text-sm text-paragraph font-normal">Delays Detected</span></h6>
                            <div className="flex gap-2">
                                <div className="bg-[#E3DDFF] px-2 pt-4 pb-3 rounded-lg w-fit text-center">
                                    <h6 className="text-2xl font-bold mb-2">5</h6>
                                    <p className="text-sm font-normal">Customs Clearance Delay</p>
                                </div>
                                <div className="bg-[#E3DDFF] px-2 pt-4 pb-3 rounded-lg w-fit text-center">
                                    <h6 className="text-2xl font-bold mb-2">4</h6>
                                    <p className="text-sm font-normal">Incorrect Address Provided</p>
                                </div>
                                <div className="bg-[#E3DDFF] px-2 pt-4 pb-3 rounded-lg w-fit text-center">
                                    <h6 className="text-2xl font-bold mb-2">3</h6>
                                    <p className="text-sm font-normal">Weather-Related Hold</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <div className="flex gap-3 items-center flex-1">
                                    <div className="w-[34px] h-[34px] bg-[#F0F0F0] rounded-lg flex items-center justify-center text-lg">
                                        <i className="icon-filex"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold mb-0.5">Customs Clearance Delay</p>
                                        <p className="text-xs font-normal text-paragraph">12 Shipment</p>
                                    </div>
                                </div>
                                <Link href={"#"} className="text-base text-paragraph">
                                    <i className="icon-arrowupright"></i>
                                </Link>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-3 items-center flex-1">
                                    <div className="w-[34px] h-[34px] bg-[#F0F0F0] rounded-lg flex items-center justify-center text-lg">
                                        <i className="icon-filex"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold mb-0.5">Customs Clearance Delay</p>
                                        <p className="text-xs font-normal text-paragraph">12 Shipment</p>
                                    </div>
                                </div>
                                <Link href={"#"} className="text-base text-paragraph">
                                    <i className="icon-arrowupright"></i>
                                </Link>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-3 items-center flex-1">
                                    <div className="w-[34px] h-[34px] bg-[#F0F0F0] rounded-lg flex items-center justify-center text-lg">
                                        <i className="icon-filex"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold mb-0.5">Customs Clearance Delay</p>
                                        <p className="text-xs font-normal text-paragraph">12 Shipment</p>
                                    </div>
                                </div>
                                <Link href={"#"} className="text-base text-paragraph">
                                    <i className="icon-arrowupright"></i>
                                </Link>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-3 items-center flex-1">
                                    <div className="w-[34px] h-[34px] bg-[#F0F0F0] rounded-lg flex items-center justify-center text-lg">
                                        <i className="icon-filex"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold mb-0.5">Customs Clearance Delay</p>
                                        <p className="text-xs font-normal text-paragraph">12 Shipment</p>
                                    </div>
                                </div>
                                <Link href={"#"} className="text-base text-paragraph">
                                    <i className="icon-arrowupright"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[858fr_299fr] gap-5">
                <div className="col-span-1">
                    <div className="db-card">
                        <div className="flex justify-between items-center mb-5">
                            <h6 className="text-base font-bold">Recent Activity</h6>
                            <button className="text-paragraph bg-[#F0F0F0] w-7 h-7 rounded-lg flex items-center justify-center text-base">
                                <i className="icon-more"></i>
                            </button>
                        </div>
                        <DashboardTableComponent shipmentData={sliceData}/>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="db-card h-full">
                        <div className="flex justify-between items-center mb-5">
                            <h6 className="text-base font-bold">Recent Activity</h6>
                            <button className="text-paragraph bg-[#F0F0F0] w-7 h-7 rounded-lg flex items-center justify-center text-base">
                                <i className="icon-more"></i>
                            </button>
                        </div>
                        <div className="flex w-full flex-col items-start">
                            <div className="group flex gap-x-4 w-full">
                                <div className="relative">
                                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#E0E0E0]"></div>
                                    <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-[#E3DDFF]">
                                        <i className="icon-copy text-lg"></i>
                                    </span>
                                </div>
                                <div className="pb-5 w-full">
                                    <div className="flex flex-col justify-between items-start">
                                        <p className="text-sm text-heading mb-2 leading-tight">User @TechGuru99 submitted a bulk shipment request</p>
                                        <span className="text-[10px] text-paragraph">12:00 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex gap-x-4 w-full">
                                <div className="relative">
                                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#E0E0E0]"></div>
                                    <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-[#E0E0E0]">
                                        <i className="icon-tag text-lg"></i>
                                    </span>
                                </div>
                                <div className="pb-5 w-full">
                                    <div className="flex flex-col justify-between items-start">
                                        <p className="text-sm text-heading mb-2 leading-tight">User @TechGuru99 submitted a bulk shipment request</p>
                                        <span className="text-[10px] text-paragraph">12:00 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex gap-x-4 w-full">
                                <div className="relative">
                                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#E0E0E0]"></div>
                                    <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-[#E3DDFF]">
                                        <i className="icon-refresh text-lg"></i>
                                    </span>
                                </div>
                                <div className="pb-5 w-full">
                                    <div className="flex flex-col justify-between items-start">
                                        <p className="text-sm text-heading mb-2 leading-tight">User @TechGuru99 submitted a bulk shipment request</p>
                                        <span className="text-[10px] text-paragraph">12:00 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group flex gap-x-4 w-full">
                                <div className="relative">
                                    <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-[#E0E0E0]">
                                        <i className="icon-checkcircle text-lg"></i>
                                    </span>
                                </div>
                                <div className="pb-5 w-full">
                                    <div className="flex flex-col justify-between items-start">
                                        <p className="text-sm text-heading mb-2 leading-tight">User @TechGuru99 submitted a bulk shipment request</p>
                                        <span className="text-[10px] text-paragraph">12:00 PM</span>
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

export default DashboardPage;