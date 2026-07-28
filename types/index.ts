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
    id: string;
    shipping_id: string;
    status: ShipmentStatus;
    company: CompanyInfo;
    destination: DestinationInfo;
}