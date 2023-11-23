import { Recaps } from "../../utils/data";
import { IoMdAdd } from "react-icons/io";

import Modal from "../global/Modal";
import ModalAddNewUser from "./ModalAddNewUser";

const Recap = () => {
  return (
    <div className="flex justify-between items-center text-sm">
      <div className="flex gap-4">
        {Recaps.map((recap, idx) => (
          <div key={idx} className="border-l-2 border-black px-2">
            <h2 className="font-bold">{recap.count}</h2>
            <h3>{recap.title}</h3>
          </div>
        ))}
      </div>
      <Modal
        open={
          <span className="flex items-center justify-center gap-1">
            <IoMdAdd />
            Add New User
          </span>
        }
        text="Add New User"
      >
        <ModalAddNewUser />
      </Modal>
    </div>
  );
};

export default Recap;
