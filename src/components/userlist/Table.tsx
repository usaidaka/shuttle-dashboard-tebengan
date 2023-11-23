import { Tables } from "../../utils/definition.tsx";
import loadingGif from "../../assets/loading.gif";
import TableHead from "./TableHead.tsx";
import TableBody from "./TableBody.tsx";

const Table = ({ table, tHead, tBody, loading }: Tables) => {
  let tableHead;
  let tableBody;
  switch (table) {
    case "user list":
      tableHead = <TableHead tHead={tHead} />;
      tableBody = <TableBody tBody={tBody} />;
      break;
    default:
      break;
  }

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <div className="h-[70vh] flex justify-center items-center">
          <img src={loadingGif} alt="" className="w-14" />
        </div>
      ) : (
        <table className="table-auto text-xs rounded-[8px] w-full bg-white shadow-lg  border-collapse">
          <thead>{tableHead}</thead>
          <tbody>{tableBody}</tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
