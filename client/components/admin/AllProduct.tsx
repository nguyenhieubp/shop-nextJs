import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/config/hooks";
import { getAllProduct } from "../../redux/slice/admin/admin";
import Product from "../../models/product";

const AllProduct = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.admin);

  React.useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 p-6">
      {products.map((product: Product) => (
        <div className="p-4 border-2 border-black">
          <div className="w-full h-[10rem]">
            <img
              className="w-full h-full"
              src={product.parameterProduct[0].image}
              alt=""
            />
          </div>
          <div className="my-[2rem]">
            <div>
              <b>Tên:</b> &nbsp; &nbsp; {product.name}
            </div>
            <div>
              <b>Giá:</b> &nbsp; &nbsp; {product.price}$
            </div>
            <div>
              <b>Mô tả:</b>
              &nbsp; &nbsp; {product.description}
            </div>
          </div>
          <div className="underline cursor-pointer">Chi tiết</div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
