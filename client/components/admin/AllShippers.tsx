import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/config/hooks";
import { getAllShipper } from "../../redux/slice/shipper/shipper";
const Shippers = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getAllShipper({ token: localStorage.getItem("accessToken") }));
  }, []);
  const { listShipper } = useAppSelector((state) => state.shipper);
  console.log(listShipper);
  return (
    <div className="p-6">
      <h2 className="text-[2.2rem]">List Shipper</h2>
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
                      Địa Chỉ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Mã
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
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {listShipper.map((shipper, index) => (
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {shipper.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 ">
                        {shipper.address.ward} - {shipper.address.village} -{" "}
                        {shipper.address.district} - {shipper.address.city}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right">
                        {shipper._id}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right ">
                        {shipper.phone}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right ">
                        {shipper.email}
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

export default Shippers;
