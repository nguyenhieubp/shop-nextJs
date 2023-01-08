import React from "react";
import { useAppSelector } from "../../redux/config/hooks";
import { totalPrice } from "../../redux/slice/user/user";
import Product from "./Product";
const Cart = () => {
  const total = useAppSelector(totalPrice);
  return (
    <div className="lg:block hidden col-span-2 h-screen border-l-2 px-[2rem] pt-[4rem]">
      <div className="overflow-y-scroll max-h-[20rem] scrollbar-hide">
        <Product></Product>
      </div>
      <hr className="py-[1rem]" />
      <hr className="py-[1rem]" />
      <div className="flex items-center justify-between">
        <div className="text-[1.8rem]">Tổng Cộng</div>
        <div>{total}$</div>
      </div>
    </div>
  );
};

export default Cart;
