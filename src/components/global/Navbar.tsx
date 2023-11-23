import { Link, useLocation } from "react-router-dom";
import tebenganHead from "../../assets/tebenganLogoDashboard.png";
import { Menus } from "../../utils/data";
import { Menu } from "../../utils/definition";
import pp1 from "../../assets/pp1.jpg";

type User = {
  name: string;
  src: string;
};

const userAuth: User = { name: "Marjinal Kamaludin", src: pp1 };

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="sticky top-0 w-full bg-blue-500 h-[80px] grid grid-cols-12">
      <Link to="/" className="col-span-2 flex justify-center items-center">
        <img src={tebenganHead} alt="tebengan head" className="h-[44px]" />
      </Link>
      <div className="col-span-10 flex justify-between items-center">
        {Menus.map(
          (menu: Menu, idx) =>
            menu.to === location.pathname && (
              <h1 key={idx} className="text-2xl text-white font-bold ">
                {menu.title}
              </h1>
            )
        )}
        <div className="flex items-center justify-center gap-4 mr-8 text-white">
          <p>{userAuth.name}</p>
          <img
            src={userAuth.src}
            alt="user logged in"
            className="w-12 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
