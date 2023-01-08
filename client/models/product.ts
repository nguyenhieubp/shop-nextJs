export default interface Product {
  _id: string;
  name: string;
  typeProduct: string;
  description: string;
  price: number;
  sale: number;
  ratting: number;
  typeSize: string[];
  parameterProduct: ParameterProduct[];
}

export interface DetailProduct {
  name: string;
  typeSize: string;
  typeProduct: string;
  description: string;
  price: number;
  sale: number;
  ratting: number;
}

export interface ParameterProduct {
  image: string;
  color: string;
}
