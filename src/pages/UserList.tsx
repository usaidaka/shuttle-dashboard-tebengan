import InputSearch from "../components/global/InputSearch";
import Recap from "../components/userlist/Recap";
import Table from "../components/userlist/Table";

const UserList = () => {
  return (
    <div className="space-y-4">
      <Recap />
      <InputSearch />
      <Table />
    </div>
  );
};

export default UserList;
