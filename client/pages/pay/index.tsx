import React from "react";
import FormPay from "../../components/pay/FormPay";
import Cart from "../../components/pay/Cart";
import Head from "next/head";
import { useAppDispatch, useAppSelector } from "../../redux/config/hooks";
import Success from "../../components/pay/Success";

const page = () => {
  const { isSuccess } = useAppSelector((state) => state.user);
  return (
    <>
      <Head>
        <title>Pay</title>
      </Head>
      {isSuccess ? (
        <Success></Success>
      ) : (
        <div className="lg:px-[6rem] px-[2rem] lg:grid grid-cols-5 w-full">
          <FormPay></FormPay>
          <Cart></Cart>
        </div>
      )}
    </>
  );
};

export default page;
