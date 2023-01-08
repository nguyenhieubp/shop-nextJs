import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppDispatch } from "../../redux/config/hooks";
import { removeProduct } from "../../redux/slice/user/user";

interface Props {
  index: number;
  name: string;
  quantity: number;
  size: string;
  image: string;
  type: string;
  price: number;
}

const Product: React.FC<Props> = ({
  index,
  name,
  image,
  price,
  type,
  quantity,
  size,
}) => {
  const dispatch = useAppDispatch();
  const handleRemove = (index: number) => {
    dispatch(removeProduct(index));
  };
  return (
    <div className="grid grid-cols-12 border-y-2 mt-[2rem] items-center">
      <div className="col-span-3">
        <div className="flex justify-center items-center p-4 ">
          <div className="w-[8rem] h-[8rem] object-cover">
            <img className="w-full h-full" src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="col-span-2 text-center">
        {name} - {type} - {size}
      </div>
      <div className="col-span-2 text-center">{price * quantity}$</div>
      <div className="col-span-2 text-center">{quantity}</div>
      <div className="col-span-2 text-center">{price * quantity} $</div>
      <div className="col-span-1 text-center">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => handleRemove(index)}
        >
          <FaTimes size={25} color="red"></FaTimes>
        </div>
      </div>
    </div>
  );
};

export default Product;
