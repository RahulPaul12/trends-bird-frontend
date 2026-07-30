import Link from "next/link"

const NewShipment = () =>{
    return (
        <section>
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h2 className="text-2xl font-bold">Create New Shipment</h2>
                    <div className="db-breadcrumb">
                        <ul className="db-breadcrumb-list">
                            <li className="db-breadcrumb-item"><Link className="db-breadcrumb-link" href="/dashboard">Dashboard</Link></li>                   
                            <li className="db-breadcrumb-item"><Link className="db-breadcrumb-link" href="/dashboard">Shipments</Link></li>                   
                            <li className="db-breadcrumb-item">Create New Shipment</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="db-card p-5">
                <h2 className="text-base font-semibold mb-5">Shipment Form</h2>
                <form>
                    <div className="grid grid-cols-2 divide-x divide-[#E0E0E0] bg-[#F5F5F5] py-5 rounded-lg mb-6">
                        <div className="px-5">
                            <p className="text-sm font-semibold mb-3">Sender Info</p>
                            <div className=" grid grid-cols-2 gap-3">
                                <div className="col-span-2 h-fit">
                                    <label htmlFor="company" className="input-field-title text-paragraph">Company</label>
                                    <input id="company" className="input-field-control bg-white" type="text"/>
                                </div>
                                <div className="col-span-1 h-fit">
                                    <label htmlFor="email" className="input-field-title text-paragraph">Email</label>
                                    <input id="email" className="input-field-control bg-white" type="email" />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="phone" className="input-field-title text-paragraph">Phone Number</label>
                                    <input id="phone" className="input-field-control bg-white" type="number"/>
                                </div>
                                <div className="col-span-2 h-fit">
                                    <label htmlFor="p-address" className="input-field-title text-paragraph">Pickup Address</label>
                                    <input id="p-address" className="input-field-control bg-white" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="px-5">
                            <p className="text-sm font-semibold mb-3">Sender Info</p>
                            <div className=" grid grid-cols-2 gap-3">
                                <div className="col-span-2 h-fit">
                                    <label htmlFor="company" className="input-field-title text-paragraph">Company</label>
                                    <input id="company" className="input-field-control bg-white" type="text"/>
                                </div>
                                <div className="col-span-1 h-fit">
                                    <label htmlFor="email" className="input-field-title text-paragraph">Email</label>
                                    <input id="email" className="input-field-control bg-white" type="email" />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="phone" className="input-field-title text-paragraph">Phone Number</label>
                                    <input id="phone" className="input-field-control bg-white" type="number"/>
                                </div>
                                <div className="col-span-2 h-fit">
                                    <label htmlFor="d-address" className="input-field-title text-paragraph">Delivery Address</label>
                                    <input id="d-address" className="input-field-control bg-white" type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex divide-x divide-[#E0E0E0]">
                        <div className="pr-6 max-w-[347px]">
                            <p className="text-sm font-semibold mb-3">Package Detailso</p>
                            <div className=" grid grid-cols-2 gap-3">
                                <div className="col-span-2 h-fit">
                                    <label htmlFor="desc" className="input-field-title text-paragraph">Item Description</label>
                                    <input id="desc" className="input-field-control" type="text"/>
                                </div>
                                <div className="col-span-1 h-fit">
                                    <label htmlFor="email" className="input-field-title text-paragraph">Quantity</label>
                                    <input id="email" className="input-field-control" type="email"/>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="email" className="input-field-title text-paragraph">Value</label>
                                    <input id="email" className="input-field-control" type="email"/>
                                </div>
                                <div className="col-span-2 h-fit">
                                    <label htmlFor="email" className="input-field-title text-paragraph">Email Address</label>
                                    <input id="email" className="input-field-control" type="email"/>
                                </div>
                            </div>
                        </div>
                        <div className="pl-6 flex-1">
                            <p className="text-sm font-semibold mb-3">Shipping Details</p>
                            <div className=" grid grid-cols-2 gap-3">
                                <div className="col-span-2 h-fit">
                                    <label htmlFor="email" className="input-field-title text-paragraph">Email Address</label>
                                    <input id="email" className="input-field-control" type="email" placeholder="Enter your email address" />
                                </div>
                                <div className="col-span-1 h-fit">
                                    <label htmlFor="email" className="input-field-title text-paragraph">Email Address</label>
                                    <input id="email" className="input-field-control" type="email" placeholder="Enter your email address" />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="email" className="input-field-title text-paragraph">Email Address</label>
                                    <input id="email" className="input-field-control" type="email" placeholder="Enter your email address" />
                                </div>
                                <div className="col-span-2 h-fit">
                                    <label htmlFor="email" className="input-field-title text-paragraph">Email Address</label>
                                    <input id="email" className="input-field-control" type="email" placeholder="Enter your email address" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-2.5 border-t border-[#E0E0E0] pt-5 mt-5">
                        <button className="bg-[#F0F0F0] text-black px-4 h-10 rounded-lg flex items-center">Delete Form</button>
                        <button className="bg-black text-white px-4 h-10 rounded-lg flex items-center">Submit Shipment</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default NewShipment