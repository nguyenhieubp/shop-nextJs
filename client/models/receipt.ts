export default interface Receipt {
  products: Product[];
  quantity: number;
  totalMoney: number;
  nameUserBuy: string;
  phone: string;
  address: string;
  _id: string;
}

export interface Product {
  name: string;
  size: string;
  color: string;
}
