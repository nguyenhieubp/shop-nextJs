import axios from "axios";
import Link from "next/link";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/config/hooks";
import { setSuccess, totalPrice } from "../../redux/slice/user/user";
import { useSnackbar } from "notistack";
interface InfoUser {
  name: string;
  phone: number | null;
  address: string;
}

const FormPay = () => {
  const { enqueueSnackbar } = useSnackbar();
  const showNotiError = () => {
    enqueueSnackbar("Error", {
      variant: "error",
      autoHideDuration: 2000,
    });
  };

  const dispatch = useAppDispatch();
  //get all product
  const { products } = useAppSelector((state) => state.user);
  const product = products.map((product) => {
    return {
      color: product.color,
      size: product.size,
      name: product.product.name,
      quantity: product.quantity,
    };
  });

  const total = useAppSelector(totalPrice);

  const [info, setInfo] = React.useState<InfoUser>({
    address: "",
    name: "",
    phone: null,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleBuy = async (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (products.length <= 0) {
      showNotiError();
      return;
    }
    try {
      await axios.post(`http://localhost:3000/api/v1/receipt/create`, {
        products: product,
        totalMoney: total,
        nameUserBuy: info.name,
        phone: info.phone,
        address: info.address,
      });
      dispatch(setSuccess());
    } catch (error) {}
  };

  return (
    <div className="col-span-3 pt-[4rem]">
      <Link href={"/"}>
        <h1 className="text-[2.2rem]">Siuuu.vn</h1>
      </Link>
      <div>
        <h2 className="text-[1.8rem] py-[1rem]">Thông tin giao hàng</h2>
        <form onSubmit={handleBuy}>
          <input
            onChange={handleInput}
            name="name"
            className="lg:w-[30rem] w-[20rem] p-2 mb-[1rem] border-2"
            placeholder="Họ Tên"
            type="text"
          />
          <br />
          <input
            onChange={handleInput}
            name="phone"
            className="lg:w-[30rem] w-[20rem] p-2 mb-[1rem] border-2"
            placeholder="Số điện thoại"
            type="number"
          />
          <br />
          <input
            onChange={handleInput}
            name="address"
            className="lg:w-[30rem] w-[20rem] p-2 mb-[1rem] border-2"
            placeholder="Địa chỉ"
            type="text"
          />
          <br />
          <button
            onClick={handleBuy}
            className="px-[2rem] py-[1rem] bg-blue-400 text-white rounded-[0.5rem]"
            type="submit"
          >
            Hoàn tất đơn hàng
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPay;
