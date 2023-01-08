import React from "react";
import { useAppSelector } from "../../redux/config/hooks";
import { ProductRoot } from "../../redux/slice/user/user";

const Product = () => {
  const { products } = useAppSelector((state) => state.user);
  return (
    <div>
      {products.map((product: ProductRoot) => (
        <div className=" flex items-center mb-[2rem]">
          <div className="w-[4rem] h-[4rem]">
            <img
              className="w-full h-full object-cover rounded-[1rem]"
              src={product.product.parameterProduct[0].image}
              alt={product.product.name}
            />
          </div>
          <div className="ml-[2rem]">
            <div className="flex items-center">
              <div className="text-[1.2rem]">
                {product.product.name} - {product.color} - {product.size}
              </div>
              <div className="ml-[1rem]">số lượng {product.quantity}</div>
            </div>
            <p>{product.quantity * product.product.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
