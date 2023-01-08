interface Address {
  city: string;
  district: string;
  ward: string;
  village: string;
}

export interface Shipper {
  address: Address;
  _id: string;
  email: string;
  avatar: string;
  phone: string;
  __v: number;
  name: string;
}
