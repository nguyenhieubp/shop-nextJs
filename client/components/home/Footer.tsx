import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="my-[1rem]" />
      <div className=" lg:px-[6rem] px-[2rem] py-[1rem] grid lg:grid-cols-3 gap-x-[2rem] grid-cols-1 gap-y-[2rem] lg:gap-0">
        <div className="col-span-1">
          <h2 className="text-[2rem]  uppercase">Hệ thống của hàng</h2>
          <div>Ngõ 110 Trần Duy Hưng</div>
          <div>Quata</div>
          <div>Dubai</div>
        </div>
        <div className="col-span-1">
          <h2 className="text-[1.75rem]  uppercase">
            CHÍNH SÁCH VÀ QUY ĐỊNH CHUNG
          </h2>
          <div>Hình Thức Mua</div>
          <div>Hính Thức Thanh Toán</div>
          <div>Chính Sách Bảo Quản</div>
          <div>Chính Sách Đổi Hàng</div>
        </div>
        <div className="col-span-1">
          <h2 className="text-[1.75rem]  uppercase">ĐỊA CHỈ</h2>
          <div>110 Trần Duy Hưng, Cầu Giấy , Hà Nội</div>
          <div>Email: @gmail.com</div>
          <div>Hotline: 0123456789</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
