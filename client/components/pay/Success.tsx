import Link from "next/link";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
const Success = () => {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col items-center">
        <BsCheckLg color="green" size={30}></BsCheckLg>
        <Link href={"/"}>
          <h1 className="text-green mt-[1rem] font-bold text-[2.4rem]">
            Success
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Success;
