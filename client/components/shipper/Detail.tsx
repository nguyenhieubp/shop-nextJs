import axios from "axios";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/config/hooks";
import { getReceipt } from "../../redux/slice/shipper/shipper";
const Detail = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch(getReceipt({ token: token }));
  }, []);
  const { listReceipt } = useAppSelector((state) => state.shipper);

  return (
    <div className="p-4">
      <h1 className="text-[2rem]">List Product Ship</h1>
      <div className="flex flex-col w-full">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Tên Sản Phẩm
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Mã sản phẩm
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
                      Hoàn Thành
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Array.isArray(listReceipt) &&
                    listReceipt.map((receipt, index) => (
                      <tr key={receipt._id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {receipt.nameUserBuy}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {receipt.products.map((item, index) => (
                            <div key={index}>
                              {item.name} -{item.size} - {item.color}
                            </div>
                          ))}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {receipt._id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {receipt.address}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-green-500 hover:text-green-700"
                            href="#"
                          >
                            0123456789
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="#"
                          >
                            Hoàn Thành
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
