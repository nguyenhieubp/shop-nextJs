import React from "react";
import Product from "../../components/cart/Product";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import Link from "next/link";
import { useAppSelector } from "../../redux/config/hooks";
import { totalPrice } from "../../redux/slice/user/user";
import Head from "next/head";
const page = () => {
  const { products } = useAppSelector((state) => state.user);

  const total = useAppSelector(totalPrice);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Header></Header>
      <div className="lg:px-[6rem] px-[2rem]">
        <div className="w-full  h-[0.25rem] bg-blue-400"></div>
        {products.length <= 0 ? (
          <>
            <div className="bg-[#dbdbdb] p-[1rem]">
              <p>Không có sản phẩm nào</p>
            </div>
            <div className="inline-block p-4 bg-[#dbdbdb] mt-[2rem]">
              <a href="/" className="text-bold">
                Quay lại cửa hàng
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="border-2 mt-[2rem]">
              <div className="grid grid-cols-12 ">
                <div className="col-span-3 text-center">Sản phẩm</div>
                <div className="col-span-2 text-center">Tên</div>
                <div className="col-span-2 text-center">Giá</div>
                <div className="col-span-2 text-center">Số lượng</div>
                <div className="col-span-2 text-center">Tạm tính</div>
                <div className="col-span-1 text-center">Xóa</div>
              </div>
              {products.map((product, index) => (
                <Product
                  index={index}
                  image={product.product.parameterProduct[0].image}
                  name={product.product.name}
                  type={product.color}
                  size={product.size}
                  price={product.product.price}
                  quantity={product.quantity}
                ></Product>
              ))}
            </div>
            <div className="flex justify-end ">
              <div className="w-[30rem] ">
                <h2 className="text-[2rem]">Cộng giỏ hàng</h2>
                <div className="flex items-center justify-between border-2 mb-2 p-2">
                  <div>Tạm tính</div>
                  <div>{total}$</div>
                </div>
                <div className="flex items-center justify-between border-2 mb-2 p-2">
                  <div>Tổng</div>
                  <div>{total}$</div>
                </div>
                <Link href={"/pay"}>
                  <button className="p-4 w-full bg-black text-white mt-[2rem]">
                    Tiến hành thanh toán
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default page;
