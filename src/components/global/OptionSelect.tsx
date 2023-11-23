import React from "react";

const OptionSelect = ({
  label,
  placeholder,
  option,
}: {
  label: string;
  placeholder: string;
  option: string[];
}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <div className="overflow-hidden flex justify-center items-center focus-within:border-cyan-600 focus-within:ring-cyan-600 rounded-lg border-2 w-full">
        <form action="" className="flex items-center w-full">
          <select
            name=""
            id=""
            className="border-transparent focus:border-transparent focus:ring-0 text-sm py-2 px-3 border-none w-full"
          >
            <option value="">{placeholder}</option>
            {option.map((select, idx) => (
              <option key={idx} value="">
                {select}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default OptionSelect;
