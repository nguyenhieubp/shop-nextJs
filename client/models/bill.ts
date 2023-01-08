export default interface BillRoot {
  _id: string;
  shipper: Shipper;
  receipt: Receipt;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Receipt {
  address: String;
  _id: string;
  products: Product[];
  quantity: number;
  totalMoney: number;
  nameUserBuy: string;
  phone: string;
  add: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Product {
  parameterProduct: ParameterProduct[];
  name: string;
  typeProduct: string;
  description: string;
  price: number;
  sale: number;
  rating: number;
  _id: string;
}

interface ParameterProduct {
  image: string;
  size: string;
  color: string;
  count: number;
  _id: string;
}

interface Shipper {
  address: Address;
  _id: string;
  email: string;
  avatar: string;
  phone: string;
  __v: number;
  name: string;
}

interface Address {
  city: string;
  district: string;
  ward: string;
  village: string;
}
