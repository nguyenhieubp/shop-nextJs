"use client";
import React from "react";
import { IoMdCreate } from "react-icons/io";
import { RiFolderUserFill } from "react-icons/ri";
import { RiBillLine } from "react-icons/ri";
import { VscRootFolderOpened } from "react-icons/vsc";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { updateOption } from "../../redux/slice/optionAdmin";
import { useAppDispatch, useAppSelector } from "../../redux/config/hooks";
import Link from "next/link";

const TabBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { select } = useAppSelector((state) => state.optionAdmin);

  return (
    <div>
      <Link href={"/"}>
        <h1 className="text-[2rem] text-center py-[1rem] font-bold">
          Logo Shop
        </h1>
      </Link>
      <hr className="bg-white" />
      <Link href={"/admin"}>
        <div onClick={() => dispatch(updateOption("receipt"))}>
          <div
            style={select === "receipt" ? { background: "#333333" } : {}}
            className=" border-b-2 border-white"
          >
            <div className="flex  items-center px-[1.5rem] cursor-pointer">
              <RiBillLine size={24} color="white"></RiBillLine>
              <div className="p-[2rem] font-bold text-[1.4rem] text-white mr-[1rem]">
                Receipt
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/admin/createProduct"}>
        <div onClick={() => dispatch(updateOption("create Product"))}>
          <div
            style={select === "create Product" ? { background: "#333333" } : {}}
            className=" border-b-2 border-white cursor-pointer"
          >
            <div className="flex  items-center px-[1.5rem]">
              <IoMdCreate size={24} color="white"></IoMdCreate>
              <div className="p-[2rem] font-bold text-[1.4rem] text-white mr-[1rem]">
                Create Product
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/admin/shipper"}>
        <div onClick={() => dispatch(updateOption("shipper"))}>
          <div
            style={select === "shipper" ? { background: "#333333" } : {}}
            className=" border-b-2 border-white"
          >
            <div className="flex  items-center px-[1.5rem] cursor-pointer">
              <RiFolderUserFill size={24} color="white"></RiFolderUserFill>
              <div className="p-[2rem] font-bold text-[1.4rem] text-white mr-[1rem]">
                All Shipper
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link href={"/admin/billRoot"}>
        <div onClick={() => dispatch(updateOption("billRoot"))}>
          <div
            style={select === "billRoot" ? { background: "#333333" } : {}}
            className=" border-b-2 border-white"
          >
            <div className="flex  items-center px-[1.5rem] cursor-pointer">
              <VscRootFolderOpened
                size={24}
                color="white"
              ></VscRootFolderOpened>
              <div className="p-[2rem] font-bold text-[1.4rem] text-white mr-[1rem]">
                Bill Root
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/admin/createBillRoot"}>
        <div onClick={() => dispatch(updateOption("createBillRoot"))}>
          <div
            style={select === "createBillRoot" ? { background: "#333333" } : {}}
            className=" border-b-2 border-white"
          >
            <div className="flex  items-center px-[1.5rem] cursor-pointer">
              <MdOutlineCreateNewFolder
                size={24}
                color="white"
              ></MdOutlineCreateNewFolder>
              <div className="p-[2rem] font-bold text-[1.4rem] text-white mr-[1rem]">
                Create Bill Root
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/admin/allProduct"}>
        <div onClick={() => dispatch(updateOption("allProduct"))}>
          <div
            style={select === "allProduct" ? { background: "#333333" } : {}}
            className=" border-b-2 border-white"
          >
            <div className="flex  items-center px-[1.5rem] cursor-pointer">
              <MdOutlineCreateNewFolder
                size={24}
                color="white"
              ></MdOutlineCreateNewFolder>
              <div className="p-[2rem] font-bold text-[1.4rem] text-white mr-[1rem]">
                All Product
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TabBar;
