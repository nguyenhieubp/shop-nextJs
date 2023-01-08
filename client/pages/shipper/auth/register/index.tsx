import React from "react";

const index = () => {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 shadow">
      <h1 className="text-[2rem]">Register</h1>
      <form className="w-[20rem]">
        <div className="mb-[1rem]">
          <h3>Name</h3>
          <input className="border-2 border-black w-full" type="text"></input>
          <br />
        </div>
        <div className="mb-[1rem]">
          <h3>Email</h3>
          <input className="border-2 border-black w-full" type="text"></input>
          <br />
        </div>
        <div className="mb-[1rem]">
          <h3>Password</h3>
          <input className="border-2 border-black w-full" type="text"></input>
          <br />
        </div>
        <button
          className="w-full bg-blue-400 text-white rounded-[0.5rem] py-[0.5rem]"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default index;
