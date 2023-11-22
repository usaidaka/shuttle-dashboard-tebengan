import { Recaps } from "../../utils/data";
import Button from "../global/Button";
import { IoMdAdd } from "react-icons/io";

const Recap = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        {Recaps.map((recap, idx) => (
          <div key={idx} className="border-l-2 border-black px-2">
            <h2 className="font-bold">{recap.count}</h2>
            <h3>{recap.title}</h3>
          </div>
        ))}
      </div>
      <Button color="add">
        <span className="flex items-center justify-center gap-1">
          <IoMdAdd />
          Add New User
        </span>
      </Button>
    </div>
  );
};

export default Recap;
