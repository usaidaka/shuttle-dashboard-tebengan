import clsx from "clsx";
import { Menus } from "../../utils/data";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "../../utils/definition";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className=" min-h-screen bg-white ">
      <div className="sticky top-[80px] w-[240px] bg-white p-[16px] gap-[8px] space-y-[8px]">
        {Menus.map((menu: Menu, idx) => (
          <Link
            to={menu.to}
            key={idx}
            className={clsx(
              "flex justify-start gap-[8px] hover:bg-blue-100 transition-all duration-300 ease-in-out items-center px-[16px] py-[10px] rounded-[8px]",
              {
                "bg-blue-500 text-white hover:bg-blue-500 hover:text-white":
                  location.pathname === menu.to,
              }
            )}
          >
            <span className="text-xl">{menu.icon}</span>
            <span className="">{menu.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
