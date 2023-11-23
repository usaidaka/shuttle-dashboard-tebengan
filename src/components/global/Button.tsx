type Button = {
  children: React.ReactNode;
  color: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, color, disabled, onClick = () => {} }: Button) => {
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
    case "cancel":
      style = "border-2 bg-white border-gray-300 text-black";
      break;
    case "confirm":
      style = "bg-blue-500 border-2 border-blue-500 text-white";
      break;
    default:
      style = "bg-green-200 text-green-500";
      break;
  }

  return (
    <button
      className={`w-fit px-[16px] py-[8px] rounded-[8px] font-bold text-sm ${style}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
