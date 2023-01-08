import React from "react";
interface Props {
  image: string;
  price: number;
  name: string;
}
const ItemProduct: React.FC<Props> = ({ image, price, name }) => {
  return (
    <div className="cursor-pointer w-full">
      <div className="w-full lg:h-[20rem] h-[10rem] ">
        <img className="w-full h-full object-contain" src={image} alt="" />
      </div>
      <div className="text-center">{name}</div>
      <div className="text-center text-red-600 text-[1.4rem]">{price}$</div>
    </div>
  );
};

export default ItemProduct;
