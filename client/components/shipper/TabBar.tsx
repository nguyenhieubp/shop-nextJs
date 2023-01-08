import Link from "next/link";
import React from "react";
import { IoMdCreate } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { update } from "../../redux/slice/optionShipper";
import { useAppDispatch, useAppSelector } from "../../redux/config/hooks";
import { shipperCurrent } from "../../redux/slice/shipper/shipper";
const TabBar = () => {
  const dispatch = useAppDispatch();
  const { select } = useAppSelector((state) => state.optionShipper);
  const { shipper } = useAppSelector((state) => state.shipper);
  React.useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch(shipperCurrent({ token: token }));
  }, []);

  return (
    <div>
      <Link href={"/"}>
        <h1 className="text-[2rem] text-center py-[1rem] font-bold">
          Logo Shop
        </h1>
      </Link>
      <hr className="bg-white" />
      <Link onClick={() => dispatch(update("shipper"))} href={"/shipper"}>
        <div
          style={select === "shipper" ? { background: "#333333" } : {}}
          className=" border-b-2 border-white cursor-pointer"
        >
          <div className="flex  items-center px-[1.5rem]">
            <IoMdCreate size={24} color="white"></IoMdCreate>
            <div className="p-[1rem] font-bold text-[1.4rem] text-white mr-[1rem]">
              All Product
            </div>
          </div>
        </div>
      </Link>
      <Link onClick={() => dispatch(update("me"))} href={"/shipper/setting"}>
        <div
          style={select === "me" ? { background: "#333333" } : {}}
          className=" border-b-2 border-white cursor-pointer"
        >
          <div className="flex  items-center px-[1.5rem]">
            <AiOutlineUser size={24} color="white"></AiOutlineUser>
            <div className="p-[1rem] font-bold text-[1.4rem] text-white mr-[1rem]">
              Me
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TabBar;
