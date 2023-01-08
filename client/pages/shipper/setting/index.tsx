import React from "react";
import TabBar from "../../../components/shipper/TabBar";
import { useAppSelector } from "../../../redux/config/hooks";
const index = () => {
  const { shipper } = useAppSelector((state) => state.shipper);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 h-screen bg-blue-500">
        <TabBar></TabBar>
      </div>
      <div className="col-span-4 h-screen  p-6">
        <h1 className="text-[2rem]">Thông tin</h1>
        <img
          className="w-[5rem] h-[5rem] rounded-full"
          src={shipper?.avatar}
          alt="avatar"
        />
        <div className="mt-[2rem]">
          <h3>Email: {shipper?.email}</h3>
          <h3>Mã: {shipper?._id}</h3>
          <h3>SĐT: {shipper?.phone}</h3>
          <h2>Địa chỉ</h2>
          <h3>Thành Phố: {shipper?.address.city}</h3>
        </div>
      </div>
    </div>
  );
};

export default index;
