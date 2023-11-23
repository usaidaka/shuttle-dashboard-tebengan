import React from "react";
import clsx from "clsx";
import { MdOutlineMonitor } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import Badge from "../global/Badge.tsx";
import { MdVerified } from "react-icons/md";
import { UserData } from "../../utils/definition";

const TableBody = ({ tBody }: { tBody: UserData[] | undefined }) => {
  return (
    <>
      {tBody?.map((body, idx) => (
        <tr
          key={idx}
          className={clsx("border-b-2", {
            "border-b-0": idx === tBody.length - 1,
          })}
        >
          <td className="p-4">
            <input type="checkbox" name="" id="" />
          </td>
          <td className="p-4 space-y-2">
            <div>
              <span className="text-[#747474]">User ID</span>
              <p className="font-semibold">{body.ID?.userID}</p>
            </div>
            <div>
              <span className="text-[#747474]">Employee ID</span>
              <p className="font-semibold">{body.ID?.employeeID}</p>
            </div>
            <p className="text-xl">
              {body.ID?.device === "pc" ? (
                <MdOutlineMonitor />
              ) : (
                <FaMobileAlt />
              )}
            </p>
            <p className="text-[#747474]">Date created at {body.ID?.date}</p>
            {body.ID?.firstLogin && (
              <p className="text-[#747474]">
                First app login on {body.ID?.firstLogin}
              </p>
            )}
          </td>
          <td className="p-4 space-y-2">
            <Badge color={body.Status?.position}>{body.Status?.position}</Badge>
            <p>{body.Status?.lastActive}</p>
            <p className="text-[#747474]">{body.Status?.lastBook}</p>
          </td>
          {/*  */}
          <td className="p-4 space-y-2">
            <img
              src={body.Name?.photo}
              alt="user profile picture"
              className={clsx("w-[50px] h-[50px] object-cover rounded-full", {
                "filter grayscale contrast-100":
                  body.Status?.position === "Inactive",
              })}
            />
            <p>{body.Name?.fullName}</p>
            <p className="text-[#747474]">{body.Name?.gender}</p>
            {body.Name?.company && (
              <div>
                <p className="text-[#747474]">Company</p>
                <span>{body.Name?.company}</span>
              </div>
            )}
            {body.Name?.department && (
              <div>
                <p className="text-[#747474]">Department</p>
                <span>{body.Name?.department}</span>
              </div>
            )}
          </td>
          <td className="p-4 space-y-2">
            <div>
              <p className="text-[#747474]">Mobile Number</p>
              <span>{body.Contact?.phone}</span>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <p className="text-[#747474]">Email</p>
                <p className="text-lg text-[#07A85B]">
                  {body.Contact?.email !== "-" && <MdVerified />}
                </p>
              </div>
              <span>{body.Contact?.email}</span>
            </div>
          </td>
          <td className="p-4 space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 space-y-2">
                <div>
                  <p className="text-[#747474]">Home</p>
                  <p className="font-semibold">
                    {body.Address[0]?.home?.title}
                  </p>
                  <p>{body.Address[0]?.home?.path}</p>
                  <a href="#" className="text-[#1D8AF5]">
                    View Map
                  </a>
                </div>
                <p className="text-[#747474]">
                  Depart at {body.Address[0]?.home?.depart}
                </p>
                <p className="text-[#747474]">
                  Arrival at {body.Address[0]?.home?.arrival}
                </p>
              </div>
              <div className="col-span-1  space-y-2">
                <div>
                  <p className="text-[#747474]">Work</p>
                  <p className="font-semibold">
                    {body.Address[1]?.work?.title}
                  </p>
                  <p>{body.Address[1]?.work?.path}</p>
                  <a href="#" className="text-[#1D8AF5]">
                    View Map
                  </a>
                </div>
                <p className="text-[#747474]">
                  Depart at {body.Address[1]?.work?.depart}
                </p>
                <p className="text-[#747474]">
                  Arrival at {body.Address[1]?.work?.arrival}
                </p>
              </div>
            </div>
          </td>
          <td className="p-2">
            {body.Trip ? (
              body.Trip === "1" ? (
                <div>
                  <p>{body.Trip} Total Trip</p>{" "}
                  <a href="#" className="text-[#1D8AF5]">
                    View Map
                  </a>
                </div>
              ) : (
                <div>
                  <p>{body.Trip} Total Trips</p>
                  <a href="#" className="text-[#1D8AF5]">
                    View Map
                  </a>
                </div>
              )
            ) : (
              <p>-</p>
            )}
          </td>
          <td className="p-4 space-y-2">
            {body.Voucher?.map((coupon, idx) => (
              <div key={idx}>
                <p
                  className={clsx("font-semibold", {
                    "font-normal": coupon.title === "-",
                  })}
                >
                  {coupon.title}
                </p>
                <p>{coupon.detail}</p>
              </div>
            ))}

            {body.Voucher?.every((coupon) => coupon.id) && (
              <a href="#" className="text-[#1D8AF5]">
                View Map
              </a>
            )}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableBody;
