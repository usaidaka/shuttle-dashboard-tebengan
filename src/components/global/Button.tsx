import React from "react";

type Button = {
  children: React.ReactNode;
  color: string;
  disabled?: boolean;
};

const Button = ({ children, color, disabled }: Button) => {
  let style: string;
  switch (color) {
    case "add":
      style = "bg-blue-200 text-blue-600";
      break;
    case "delete":
      style = "bg-red-200 text-red-600";
      break;
    case "disabled":
      style = "bg-gray-200 text-gray-400";
      break;
    default:
      style = "bg-green-200 text-green-500";
      break;
  }

  return (
    <button
      className={`w-fit px-[16px] py-[8px] rounded-[8px] font-bold ${style}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
