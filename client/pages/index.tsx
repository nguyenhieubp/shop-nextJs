// Import css files

import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import ItemProduct from "../components/home/Product";
import Slick from "../components/home/Slick";
import Product from "../models/product";
import { useAppSelector } from "../redux/config/hooks";
// import "../styles/globals.css";

export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:3000/api/v1/product`);
  const data = await response.json();

  return {
    props: { products: data.products },
  };
};

const index = ({ products }: { products: Array<Product> }) => {
  const { search } = useAppSelector((state) => state.user);

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="content" />
        <html lang="vi"></html>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header></Header>
      <div className="w-[100%] h-[10rem] lg:h-[30rem] relative">
        <Slick></Slick>
      </div>
      <div className="grid lg:grid-cols-4 lg:gap-8 grid-cols-1">
        {products
          .filter((product) => {
            if (search === "") {
              return product;
            } else if (
              product.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product: Product) => (
            <Link key={product._id} href={`${product._id}`}>
              <div className="lg:px-[3rem] px-[2rem] lg:my-[4rem] my-[1rem] ">
                <ItemProduct
                  name={product.name}
                  image={product.parameterProduct[0].image}
                  price={product.price}
                ></ItemProduct>
              </div>
            </Link>
          ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default index;
