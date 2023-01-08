import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { useRouter } from "next/router";
import Product from "../models/product";
import { ParameterProduct } from "../models/product";
import { useAppDispatch } from "../redux/config/hooks";
import { addStore } from "../redux/slice/user/user";
import Head from "next/head";

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3000/api/v1/product/` + id);
  const data = await response.json();
  return {
    props: { product: data.product },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:3000/api/v1/product`);
  const data = await response.json();
  const paths = data.products.map((product: Product) => {
    return {
      params: { id: product._id },
    };
  });
  return {
    paths: paths,
    fallback: true,
  };
};

const page = ({ product }: { product: Product }) => {
  //Redux
  const dispatch = useAppDispatch();

  //State
  const [color, setColor] = React.useState<string>("");
  const [size, setSize] = React.useState<string>("");
  const [quantity, setQuantity] = React.useState<number>(0);
  const [error, setError] = React.useState<boolean>(false);

  //compare parameter show count in store
  // let parameterChoose: any;
  // product.parameterProduct.map((item: ParameterProduct) => {
  //   if (item.color === color && item.size === size) {
  //     parameterChoose = item;
  //   }
  // });

  let colorProductUserChoose: any;
  product.parameterProduct.map((item: ParameterProduct) => {
    if (item.color === color) {
      colorProductUserChoose = item;
    }
  });

  //Routers
  const router = useRouter();
  const addCart = (product: Product) => {
    if (quantity <= 0 || !color || !size) {
      setError(true);
      return;
    }
    dispatch(addStore({ color, size, quantity, product }));
    router.push("/cart");
  };

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header></Header>
      <div className="lg:px-[6rem] px-[1rem]">
        <div className="lg:flex gap-x-[3rem]">
          <div className="lg:w-[60rem] lg:h-[50rem] w-[22rem] h-[10rem]">
            <img
              className="w-full h-full object-cover"
              src={
                colorProductUserChoose?.image ||
                product.parameterProduct[0].image
              }
              alt={product.name}
            />
          </div>
          <div className="w-full">
            <h2 className="text-[2.2rem]">{product.name}</h2>
            <hr />
            <div className="flex justify-between items-center py-[2rem]">
              <h3 className="text-[2rem]">Màu Sắc</h3>
              <div className="flex">
                {product.parameterProduct.map((item) => (
                  <button
                    style={
                      color === item.color
                        ? { background: "#333333", color: "white" }
                        : {}
                    }
                    onClick={() => {
                      setColor(item.color), setQuantity(0);
                    }}
                    key={item.color}
                    className="px-[0.5rem] border-2 py-[0.25rem] mr-[1rem]"
                  >
                    {item.color}
                  </button>
                ))}
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center py-[2rem]">
              <h3 className="text-[2.2rem]">Cỡ</h3>
              <div className="flex ">
                {product?.typeSize.map((item) => (
                  <button
                    style={
                      size === item
                        ? { background: "#333333", color: "white" }
                        : {}
                    }
                    onClick={() => {
                      setSize(item), setQuantity(0);
                    }}
                    key={item}
                    className="px-[0.5rem] border-2 py-[0.25rem] mr-[1rem]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <hr />
            <div className="py-[2rem]">
              {/* {parameterChoose?.count && parameterChoose?.count > 0 && (
                <div>{parameterChoose?.count} Sản phẩm</div>
              )} */}
              <div className="flex py-[1rem] items-center">
                <button
                  onClick={() => {
                    if (quantity === 0) return;
                    return setQuantity((pre) => pre - 1);
                  }}
                  className="w-[6rem] h-[4rem] outline-none border-0 text-[1.8rem] bg-[#dbdbdb]"
                >
                  -
                </button>
                <div className="px-[3rem] h-[4rem] leading-[4rem] border-2">
                  {quantity}
                </div>
                <button
                  // style={
                  //   parameterChoose?.count
                  //     ? {}
                  //     : { pointerEvents: "none", background: "#f2f1f2" }
                  // }
                  onClick={() => setQuantity((pre) => pre + 1)}
                  className="w-[6rem] h-[4rem] outline-none border-0 text-[1.8rem] bg-[#dbdbdb]"
                >
                  +
                </button>
              </div>
              {error && (
                <div className="text-red-500">Chưa chọn sản phẩm phù hợp</div>
              )}
              <div
                onClick={() => addCart(product)}
                className="w-full py-[1rem] text-white bg-black text-[2.5rem] text-center uppercase cursor-pointer"
              >
                Thêm vào giỏ hàng
              </div>
            </div>
            <hr />
            <div>
              <h3 className="text-[2.2rem]">Mô tả</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default page;
