"use client";
import React from "react";
import { useAppDispatch } from "../../redux/config/hooks";
import { useSnackbar } from "notistack";
import { useAppSelector } from "../../redux/config/hooks";
import axios from "axios";
import { getAllShipper } from "../../redux/slice/shipper/shipper";
import { saveReceiptId } from "../../redux/slice/admin/admin";

interface Bill {
  idShipper: string;
}

const FormBillRoot: React.FC = () => {
  const dispatch = useAppDispatch();
  const { listShipper } = useAppSelector((state) => state.shipper);
  const { idReceipt } = useAppSelector((state) => state.admin);
  React.useEffect(() => {
    dispatch(getAllShipper({ token: localStorage.getItem("accessToken") }));
  }, []);

  //Snackbar
  const { enqueueSnackbar } = useSnackbar();
  const showNotiSuccess = () => {
    enqueueSnackbar("Add success", { variant: "success" });
  };

  const showNotiError = () => {
    enqueueSnackbar("Error success", { variant: "error" });
  };

  //token
  const token = localStorage.getItem("accessToken");

  //value form bill
  const [valueBill, setValueBill] = React.useState<Bill>({
    idShipper: "",
  });

  //input form
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueBill({ ...valueBill, [e.target.name]: e.target.value });
  };

  //submit
  const createBill = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:3000/api/v1/billRoot/create`,
        {
          shipper: valueBill.idShipper,
          receipt: idReceipt,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setValueBill({ idShipper: "" });
      dispatch(saveReceiptId(""));
      showNotiSuccess();
    } catch (error) {
      showNotiError();
    }
  };

  const nameShipper = listShipper.find((shipper) => {
    return shipper._id === valueBill.idShipper;
  });

  return (
    <div className="p-6">
      <h1 className="text-[2rem]">Create Bill Root</h1>
      <div className="h-[30rem]">
        <form
          onSubmit={createBill}
          className="flex justify-between w-full mt-[2rem] gap-[4rem] "
        >
          <input
            value={idReceipt}
            onChange={(e) => dispatch(saveReceiptId(e.target.value))}
            name="idReceipt"
            className="border-2 border-black mb-[1rem] w-full p-2"
            placeholder="Sản phẩm"
            type="text"
          />
          <div className="relative w-full">
            <input
              onChange={handleInput}
              value={nameShipper?.name}
              name="idShipper"
              className="border-2 border-black w-full   p-2"
              placeholder="Shipper"
              type="text"
            />
            <br />
            <div className="absolute bottom-[-2.5rem] bg-white left-0  z-20 w-full border-x-2">
              {listShipper
                .filter((item) => {
                  if (
                    item.name
                      .toLowerCase()
                      .includes(valueBill.idShipper.toLowerCase())
                  ) {
                    return item;
                  } else if (valueBill.idShipper === "") return item;
                })
                .map((shipper) => (
                  <div
                    onClick={() =>
                      setValueBill({ ...valueBill, idShipper: shipper._id })
                    }
                    className="w-full border-b-2 pl-[0.5rem]"
                    key={shipper._id}
                  >
                    {shipper.name}
                  </div>
                ))}
            </div>
          </div>
        </form>
      </div>
      <button
        onClick={createBill}
        className="px-[2rem] py-[0.5rem] rounded-lg bg-blue-400 text-white"
        type="submit"
      >
        Add
      </button>
    </div>
  );
};

export default FormBillRoot;
