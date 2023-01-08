import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/config/hooks";
import { getReceipt } from "../../redux/slice/admin/admin";
import { useSnackbar } from "notistack";
const Receipt = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getReceipt());
  }, []);

  const { receipts } = useAppSelector((state) => state.admin);
  console.log(receipts);

  const { enqueueSnackbar } = useSnackbar();
  const showNotiSuccess = () => {
    enqueueSnackbar("Copy success", {
      variant: "success",
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-[2.2rem]">All receipt</h2>
      <div className="flex flex-col w-full">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className=" border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Tên
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Kiểu Sản Phẩm
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Mã sản phẩm Receipt
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Địa Chỉ
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    SDT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Tiền
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Hoàn Thành
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                {receipts.map((receipt, index) => (
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {receipt.nameUserBuy}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                      {receipt.products.map((item) => (
                        <div>
                          <div>
                            <p>
                              {item.name} - {item.color} - {item.size}
                            </p>
                          </div>
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-4 mt-[1rem] text-sm text-gray-800 flex items-center justify-between">
                      <div>{receipt._id}</div>
                      <div
                        onClick={() => {
                          navigator.clipboard.writeText(receipt._id);
                          showNotiSuccess();
                        }}
                        className="p-2 border-2 cursor-pointer rounded-[1rem] ml-[2rem]"
                      >
                        copy
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                      {receipt.address}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right ">
                      {receipt.phone}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right ">
                      {receipt.totalMoney}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right ">
                      Hoàn Thành
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
