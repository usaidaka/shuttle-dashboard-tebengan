import React from "react";

const Badge = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  let style: string;
  switch (color) {
    case "Lead":
      style = "bg-[#F0FFF9] border-2 border-[#1D8AF5] text-[#1D8AF5]";
      break;
    case "Active":
      style = "bg-[#F0FFF9] border-2 border-[#07A85B] text-[#07A85B]";
      break;
    case "Recent":
      style = "bg-[#FFFFFF] border-2 border-[#282828] text-[#282828]";
      break;
    case "Inactive":
      style = "bg-[#FFFFFF] border-2 border-[#747474] text-[#747474]";
      break;
    default:
      style = "bg-green-200 text-green-500";
      break;
  }

  return (
    <div className={`rounded-full text-center w-fit px-2 ${style}`}>
      {children}
    </div>
  );
};

export default Badge;
