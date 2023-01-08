import axios from "axios";
import React from "react";
import { useAppDispatch } from "../../../../redux/config/hooks";
import { useRouter } from "next/router";
import { shipperCurrent } from "../../../../redux/slice/shipper/shipper";
const index = () => {
  //Dispatch redux
  const dispatch = useAppDispatch();

  //config router nextJs
  const router = useRouter();

  //value form
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePassword, setValuePassword] = React.useState("");
  const [validation, setValidation] = React.useState("");

  //Event login
  const handleLogin = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/auth/shipper/login`,
        {
          email: valueEmail,
          password: valuePassword,
        }
      );
      const { token } = response.data;
      localStorage.setItem("accessToken", token);
      dispatch(shipperCurrent({ token }));
      router.push({
        pathname: "/shipper",
      });
    } catch (error) {
      setValidation("Email or password not matches");
    }
  };

  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 shadow">
      <h1 className="text-[2rem]">Login</h1>
      <h2 className="text-red-600">{validation}</h2>
      <form onSubmit={handleLogin} className="w-[20rem]">
        <div className="mb-[1rem]">
          <h3>Email</h3>
          <input
            onChange={(e) => setValueEmail(e.target.value)}
            value={valueEmail}
            className="border-2 border-black w-full"
            type="text"
          ></input>
          <br />
        </div>
        <div className="mb-[1rem]">
          <h3>Password</h3>
          <input
            onChange={(e) => setValuePassword(e.target.value)}
            value={valuePassword}
            className="border-2 border-black w-full"
            type="text"
          ></input>
          <br />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-400 text-white rounded-[0.5rem] py-[0.5rem]"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default index;
