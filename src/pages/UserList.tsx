import { useEffect, useState } from "react";
import Button from "../components/global/Button";
import InputSearch from "../components/global/InputSearch";
import Recap from "../components/userlist/Recap";
import Table from "../components/userlist/Table";
import axios from "../api/axios";
import { UserData } from "../utils/definition";

const UserList = () => {
  const [tHead, setTHead] = useState<string[] | undefined>([]);
  const [tBody, setTBody] = useState<UserData[] | undefined>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/users");
        setTHead(Object.keys(response.data[0]));
        setTBody(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);
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
      <Table
        table="user list"
        tHead={tHead as string[]}
        tBody={tBody as UserData[] | undefined}
        loading={loading}
      />
    </div>
  );
};

export default UserList;
