import Button from "../components/global/Button";
import InputSearch from "../components/global/InputSearch";
import Recap from "../components/userlist/Recap";
import Table from "../components/userlist/Table";

const UserList = () => {
  return (
    <div className="space-y-4">
      <Recap />
      <div className="flex justify-between">
        <InputSearch />
        <div className="flex gap-[8px]">
          <Button color="disabled" disabled={true}>
            Export
          </Button>
          <Button color="add">Export All Data</Button>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default UserList;
