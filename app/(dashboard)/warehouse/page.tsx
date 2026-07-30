'use client'
import Link from "next/link"
import { useState } from "react"

const WareHouse = () =>{
    const [activeTab, setactiveTab] = useState('floor-1')
    const handleTabChange = (floor: string) => {
        setactiveTab(floor)
    }
    return (
        <section>
            <div className="flex justify-between items-center mb-5 max-sm:hidden">
                <div>
                    <h2 className="text-2xl font-bold">WareHouse</h2>
                    <div className="db-breadcrumb">
                        <ul className="db-breadcrumb-list">
                            <li className="db-breadcrumb-item"><Link className="db-breadcrumb-link" href="/dashboard">Dashboard</Link></li>                   
                            <li className="db-breadcrumb-item">Warehouse</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-2 bg-white rounded-lg max-sm:w-full">
                    <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-white bg-black`}>All</button>
                    <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-paragraph bg-white`}>Completed</button>
                    <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-paragraph bg-white`}>Delivery</button>
                    <button className={`rounded-lg px-5 py-2.25 text-xs font-semibold text-paragraph bg-white`}>Delivered</button>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-10 gap-5 mb-5">
                <div className="col-span-2">
                    <div className="flex md:flex-row lg:flex-col gap-5">
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
                <div className="col-span-2 lg:col-span-5">
                    <div className="db-card h-full">

                    </div>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <div className="db-card h-full">
                        <h6 className="text-base font-semibold mb-3">chart</h6>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-7 order-2 lg:order-1">
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
                 <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
                    <div className="db-card h-full">
                        <h6 className="text-base font-semibold mb-3">Package status</h6>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">
                <div className="col-span-1 lg:col-span-7">
                    <div className="db-card">
                        <div className="flex justify-between items-center mb-4">
                            <h6 className="text-base font-semibold">Warehouse Map</h6>
                            <div className="flex gap-2 bg-[#F0F0F0] rounded-lg">
                                <button onClick={() => handleTabChange('floor-1')} className={`rounded-lg px-5 py-2.25 text-xs font-semibold ${activeTab === 'floor-1' ? 'text-white bg-black' : 'text-paragraph'}`}>Floor 1</button>
                                <button onClick={() => handleTabChange('floor-2')} className={`rounded-lg px-5 py-2.25 text-xs font-semibold ${activeTab === 'floor-2' ? 'text-white bg-black' : 'text-paragraph'}`}>Floor 2</button>
                                <button onClick={() => handleTabChange('floor-3')} className={`rounded-lg px-5 py-2.25 text-xs font-semibold ${activeTab === 'floor-3' ? 'text-white bg-black' : 'text-paragraph'}`}>Floor 3</button>
                            </div>
                        </div>
                        <div id="floor-1" className={`db-card bg-[#F5F5F5]! ${activeTab === 'floor-1' ? 'block' : 'hidden'}`}>
                            <div className="grid grid-cols-4 gap-4 mb-4">
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-4">
                                <div className="col-span-4">
                                    <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="flex justify-between gap-2">
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="flex justify-between gap-2">
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] w-10 h-10 flex items-center justify-center">
                                            <div className="bg-white text-[10px] w-6 h-6 font-semibold rounded flex items-center justify-center">A1</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="floor-2" className={`db-card bg-[#F5F5F5]! ${activeTab === 'floor-2' ? 'block' : 'hidden'}`}>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics 2</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="floor-3" className={`db-card bg-[#F5F5F5]! ${activeTab === 'floor-3' ? 'block' : 'hidden'}`}>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="db-card">
                                    <h2 className="text-sm font-bold mb-2.5">Electronics</h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                        <div className="rounded-md bg-[#E3DDFF] p-2 flex items-center justify-center">
                                            <div className="bg-white text-[10px] font-semibold w-full h-full rounded text-center">A1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <div className="db-card h-full">
                        <h6 className="text-base font-semibold mb-3">Warehouse Activity Log</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WareHouse