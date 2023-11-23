import clsx from "clsx";
import { FaFilter } from "react-icons/fa6";

const filteredHead = ["ID", "Status", "Name", "Contact", "Address"];

const TableHead = ({ tHead }: { tHead: string[] }) => {
  return (
    <tr>
      <td className="p-4 bg-[#F6F6F6] rounded-tl-[8px]">
        <input type="checkbox" name="" id="" />
      </td>
      {tHead?.map((head, idx) => (
        <td
          key={idx}
          className={clsx("p-4 font-bold bg-[#F6F6F6] ", {
            "rounded-tr-[8px]": idx === tHead.length - 1,
          })}
        >
          {filteredHead.includes(head) ? (
            <div className="flex justify-start items-center gap-4">
              <p>{head}</p>
              <span>
                <FaFilter className="text-gray-500" />
              </span>
            </div>
          ) : (
            <p>{head}</p>
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableHead;
