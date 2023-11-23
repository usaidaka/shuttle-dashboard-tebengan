import { useState } from "react";
import Button from "../global/Button";

import { IoClose } from "react-icons/io5";

const Modal = ({
  children,
  open,
  text = "Modal",
}: {
  children: React.ReactNode;
  open: React.ReactNode;
  text: string;
}) => {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Button color="add" onClick={toggleModal}>
        {open}
      </Button>
      {modal && (
        <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">
          <div
            onClick={toggleModal}
            className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"
          />

          <div className="absolute text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] p-[14px 28px] rounded-[3px] max-w-[600px] min-w-[300px]">
            <div className="flex justify-between px-[24px] py-[16px]">
              <p className="font-semibold">{text}</p>
              <button className="" onClick={toggleModal}>
                <IoClose className="text-xl" />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
