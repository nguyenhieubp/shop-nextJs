import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../redux/config/hooks";
import { search } from "../../redux/slice/user/user";
const Header = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.user);

  return (
    <>
      <div className="lg:flex items-center justify-between lg:px-[6rem] mt-[1rem] px-[2rem]">
        <Link href={"/"}>
          <h1 className="text-[2.4rem] font-bold text-blue-500 ">Logo</h1>
        </Link>
        <div className="relative w-[20rem] lg:w-[35rem] ">
          <form>
            <input
              onChange={(e) => dispatch(search(e.target.value))}
              placeholder="Search..."
              className="p-4 lg:px-[2rem]  outline-none border-none bg-[#dbdbdb] w-full pr-[3rem]"
              type="text"
            />
            <div className="mt-[2rem] lg:mt-0 ">
              <FiSearch
                className="cursor-pointer absolute right-[1rem] top-[50%] translate-y-[-50%]"
                size={24}
              ></FiSearch>
            </div>
          </form>
        </div>
        <Link href={"/cart"}>
          <div className="relative">
            <FaShoppingCart
              className="mx-[1rem] cursor-pointer"
              size={24}
            ></FaShoppingCart>
            {products.length > 0 && (
              <div className="w-[1.5rem] h-[1.5rem] bg-red-500 text-center leading-[1.5rem] absolute lg:right-[-0.5rem]  lg:top-[-0.5rem] left-[2rem] top-[-1rem] rounded-full">
                {products.length}
              </div>
            )}
          </div>
        </Link>
      </div>
      <hr className="lg:my-[3rem] my-[1rem]" />
    </>
  );
};

export default Header;
