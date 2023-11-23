import { useState, useRef } from "react";

import { FaCamera } from "react-icons/fa6";
import InputForm from "../global/InputForm";
import InputRadio from "../global/InputRadio";
import InputPhone from "../global/InputPhone";
import OptionSelect from "../global/OptionSelect";
import TimePicker from "../global/TimePicker";
import Button from "../global/Button";

const ModalAddNewUser = () => {
  const [showImage, setShowImage] = useState<string>("");

  const inputPhotoRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      setShowImage(URL.createObjectURL(selectedImage));
    }
  };
  return (
    <div className="w-[30vw] h-full px-[24px]">
      <form action="">
        <div className="flex flex-col gap-1 items-center">
          <p>photo profile</p>
          {showImage ? (
            <img
              src={showImage}
              alt="upload profile"
              onClick={() => inputPhotoRef.current?.click()}
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <div
              onClick={() => inputPhotoRef.current?.click()}
              className="bg-[#d3e6ff] text-[#1D8AF5] gap-2 w-20 h-20 flex flex-col justify-center items-center rounded-full text-xl"
            >
              <FaCamera />
              <p className="text-xs">Upload</p>
            </div>
          )}
          <input
            type="file"
            src=""
            alt=""
            className="hidden"
            name="image"
            accept="image/png, image/jpg, image/jpeg"
            onChange={handleFile}
            ref={inputPhotoRef}
          />
        </div>
        <div className="space-y-2">
          <InputForm label="Full Name" placeholder="Enter Full name" />
          <div className="flex gap-4">
            <InputRadio label="Female" name="gender" id="female" />
            <InputRadio label="Male" name="gender" id="Male" />
          </div>
          <InputPhone label="Mobile Number" placeholder="81XXX" />
          <div className="grid grid-cols-3 gap-2">
            <InputPhone label="Emergency Call" placeholder="81XXX" />
            <OptionSelect
              label="Relationship"
              placeholder="Select"
              option={["Single", "Married", "Single Parent"]}
            />
            <InputForm label="Name" placeholder="Enter name" />
          </div>
          <InputForm label="Email" placeholder="Enter email" />
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold mt-2">Home Details</h4>
          <InputForm label="Home Address" placeholder="Search home address" />
          <div className="grid grid-cols-2">
            <TimePicker label="Arrival Time" placeholder="Select Time" />
            <TimePicker label="Depart Time" placeholder="Select Time" />
          </div>
          <InputForm
            label="Home Address Notes (Optional)"
            placeholder="Home address notes"
          />
        </div>
        <div className="flex justify-end gap-2 py-[16px]">
          <Button color="cancel">Cancel</Button>
          <Button color="confirm">Add New User</Button>
        </div>
      </form>
    </div>
  );
};

export default ModalAddNewUser;
