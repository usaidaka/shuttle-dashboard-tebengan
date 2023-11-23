import React from "react";
import { IoIosSearch } from "react-icons/io";

const InputSearch = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Value on input search", e.target.value);
  };
  const handleClick = () => {
    console.log("Search clicked");
  };

  return (
    <div className="flex justify-between text-sm">
      <div className="overflow-hidden flex justify-center items-center focus-within:border-cyan-600 focus-within:ring-cyan-600 rounded-lg border-2 w-[332px]">
        <form action="" className="flex items-center w-full">
          <input
            type="text"
            name={"name"}
            id={"id"}
            className="border-transparent focus:border-transparent focus:ring-0 text-sm py-2 px-3 border-none w-full"
            placeholder={"Search ID, name, mobile number, email"}
            onChange={handleChange}
          />

          <button
            className="bg-white h-10 w-10 text-gray-600 ml-2 flex items-center justify-center"
            onClick={handleClick}
          >
            <IoIosSearch className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
