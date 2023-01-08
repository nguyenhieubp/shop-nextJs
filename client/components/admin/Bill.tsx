import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/config/hooks";
import { getAllBill } from "../../redux/slice/admin/admin";
const Bill = () => {
  //dispatch redux
  const dispatch = useAppDispatch();

  //fetch API
  React.useEffect(() => {
    dispatch(getAllBill());
  }, []);

  //get All bill
  const { billRoots } = useAppSelector((state) => state.admin);
  console.log(billRoots);

  return (
    <div className="p-6">
      <h2 className="text-[2.2rem]">All billRoot</h2>
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
                      Tên(Shipper)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      SĐT(Shipper)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {billRoots.map((bill, index) => (
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 ">
                        {bill.receipt?.nameUserBuy}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 ">
                        {bill.receipt?.products.map((product) => (
                          <div key={product._id}>{product.name}</div>
                        ))}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 ">
                        {bill.receipt.products.map((item) => (
                          <div key={item._id}>{item._id}</div>
                        ))}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 ">
                        {bill.receipt.address}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        {bill.receipt.phone}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        {bill.shipper.name}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        {bill.shipper.phone}
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

export default Bill;
