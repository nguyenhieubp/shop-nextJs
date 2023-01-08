import axios from "axios";
import React from "react";
import { DetailProduct } from "../../models/product";
import { ParameterProduct } from "../../models/product";
import { useSnackbar } from "notistack";

const Form = () => {
  //Noti
  const { enqueueSnackbar } = useSnackbar();
  const showNotiSuccess = () => {
    enqueueSnackbar("Create success", {
      variant: "success",
      autoHideDuration: 2000,
    });
  };
  const showNotiError = () => {
    enqueueSnackbar("Error", {
      variant: "error",
      autoHideDuration: 2000,
    });
  };

  //State
  const [numberParameter, setNumberParameter] = React.useState<number>(1);
  const [listParameter, setListParameter] = React.useState<
    Array<ParameterProduct>
  >([]);

  const [parameter, setParameter] = React.useState<ParameterProduct>({
    color: "",
    image: "",
  });

  const [detailProduct, setDetailProduct] = React.useState<DetailProduct>({
    description: "",
    name: "",
    price: NaN,
    ratting: NaN,
    sale: NaN,
    typeProduct: "",
    typeSize: "",
  });

  //Validation
  const [validationDetail, setValidationDetail] = React.useState<string>("");
  const [validationParameter, setValidationParameter] =
    React.useState<string>("");

  //Event admin
  const inputParameter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParameter({ ...parameter, [e.target.name]: e.target.value });
  };

  const inputDetailProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailProduct({ ...detailProduct, [e.target.name]: e.target.value });
  };

  const handlePushProduct = () => {
    if (parameter.color === "" || parameter.image === "") {
      setValidationParameter("Xin nhập thông số cho sản phẩm");
      window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
      return;
    }
    setListParameter([...listParameter, parameter]);
    setParameter({ color: "", image: "" });
  };

  //Parameter product
  let indents = [];
  for (var i = 0; i < numberParameter; i++) {
    indents.push(
      <div key={i}>
        <div className="flex items-center mb-[2rem] ">
          <h2 className=" font-bold">Tạo danh sách sản phẩm :</h2>
          <div className="ml-[1rem] text-red-500">{validationParameter}</div>
        </div>
        <input
          value={parameter.image}
          onChange={inputParameter}
          name="image"
          className="border-2 border-black w-full p-4 mb-[2rem]"
          placeholder="Image"
          type="text"
        />

        <input
          value={parameter.color}
          onChange={inputParameter}
          name="color"
          className="border-2 border-black  w-full p-4 mb-[2rem]"
          placeholder="Color"
          type="text"
        />

        <div
          onClick={handlePushProduct}
          className="p-4 bg-green-400 text-white rounded-lg cursor-pointer mb-[2rem] inline-block"
        >
          Save
        </div>
      </div>
    );
  }

  // ================================================================================
  //Create Product
  const createProduct = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      if (
        detailProduct.typeProduct === "" ||
        detailProduct.name === "" ||
        detailProduct.description === "" ||
        detailProduct.price === null ||
        detailProduct.ratting === null ||
        detailProduct.sale === null ||
        listParameter.length <= 0
      ) {
        showNotiError();
        setValidationDetail("Xin nhập đầy đủ thông tin sản phẩm");
        return;
      }
      await axios.post(
        `http://localhost:3000/api/v1/product/create`,
        {
          name: detailProduct.name,
          typeProduct: detailProduct.typeProduct,
          description: detailProduct.description,
          price: detailProduct.price,
          sale: detailProduct.sale,
          ratting: detailProduct.sale,
          parameterProduct: listParameter,
          typeSize: detailProduct.typeSize.split(","),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      showNotiSuccess();
      // console.log(response.data);
    } catch (error) {
      // console.log(error);
      showNotiError();
    }
  };

  return (
    <div className="px-[2rem] py-[2rem] scrollItem">
      <h1 className="text-[1.8rem] font-bold">Create Products</h1>
      <div className="flex items-center my-[1rem]">
        <h3 className="font-bold">Giới thiệu sản phẩm</h3>
        <div className="ml-[1rem] text-red-500">{validationDetail}</div>
      </div>
      <form className="w-full mb-[2rem]">
        <input
          name="name"
          onChange={inputDetailProduct}
          className="border-2 border-black w-full p-4 mb-[2rem]"
          placeholder="Name"
          type="text"
        />
        <input
          name="typeProduct"
          onChange={inputDetailProduct}
          className="border-2 border-black w-full p-4 mb-[2rem]"
          placeholder="typeProduct"
          type="text"
        />
        <input
          onChange={inputDetailProduct}
          name="description"
          className="border-2 border-black  w-full p-4 mb-[2rem]"
          placeholder="description"
          type="text"
        />
        <input
          name="price"
          onChange={inputDetailProduct}
          className="border-2 border-black w-full p-4 mb-[2rem]"
          placeholder="price"
          type="number"
        />
        <input
          name="typeSize"
          onChange={inputDetailProduct}
          className="border-2 border-black w-full p-4 mb-[2rem]"
          placeholder="size"
          type="text"
        />
        <input
          name="sale"
          onChange={inputDetailProduct}
          className="border-2 border-black w-full p-4 mb-[2rem]"
          placeholder="sale"
          type="number"
        />
        <input
          name="ratting"
          onChange={inputDetailProduct}
          className="border-2 border-black w-full p-4 mb-[2rem]"
          placeholder="Ratting"
          type="number"
        />
        <div>
          <div className="w-full h-2 bg-black mb-[2rem]"></div>
          <h3 className="mb-[1rem]">Danh sách thông số sản phẩm</h3>
          <table className="mb-[2rem] table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-2">
              <tr>
                <th scope="col" className="py-3 px-6 ">
                  Image
                </th>
                <th scope="col" className="py-3 px-6">
                  Color
                </th>
              </tr>
            </thead>
            <tbody>
              {listParameter.map((parameter: ParameterProduct) => (
                <tr className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700 border-2">
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium  text-gray-900  dark:text-white overflow-hidden"
                  >
                    {parameter.image}
                  </td>
                  <td className="py-4 px-6">{parameter.color}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* -------------------------------- */}
          {indents}
        </div>

        <div className="flex justify-end mt-[4rem]">
          <button
            onClick={createProduct}
            className="bg-blue-400 text-white rounded-[0.5rem] p-4 w-full"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
