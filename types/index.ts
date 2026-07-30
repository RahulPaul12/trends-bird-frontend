export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: string;
};

// types.ts
export type ShipmentStatus = "processing" | "in transit" | "out for delivery" | "delivered";

export type CompanyInfo = {
    logo: string;
    name: string;
    company_type: string;
}

export type LocationInfo = {
    address: string;
    date_time: string;
}

export type DestinationInfo = {
    origin: LocationInfo;
    destination: LocationInfo;
    progress: number;
    delivery_company: string;
}

export type Shipment = {
    invoice_id: string,
    id: string;
    shipping_id: string;
    amount:number,
    weight:number
    status: ShipmentStatus;
    company: CompanyInfo;
    destination: DestinationInfo;
}