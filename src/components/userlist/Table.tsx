import { useEffect, useState } from "react";
import axios from "../../api/axios.ts";

type Address = {
  title: string;
  home?: string;
  work?: string;
  depart: string;
  arrival: string;
};

type Voucher = {
  id: number;
  title: string;
  detail: string;
};

type UserData = {
  id: {
    userID: number;
    employeeID: string;
    date: string;
    firstLogin: string;
  };
  status: {
    position: string;
    lastActive: string;
    lastBook: string;
  };
  name: {
    fullName: string;
    gender: string;
    company: string;
    department: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  address: Address[];
  trip: string;
  voucher: Voucher[];
};

const Table = () => {
  const [tHead, setTHead] = useState<string[] | undefined>([]);
  const [tBody, setTBody] = useState<UserData[] | undefined>([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/users");
        setTHead(Object.keys(response.data[0]));
        setTBody(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  //   console.log(tHead);
  //   console.log(tBody);

  //   const a = tBody?.map((x) => {
  //     console.log(x);
  //     console.log(x.id);
  //     console.log(x.status);
  //     console.log(x.name);
  //     console.log(x.contact);
  //     console.log(x.address);
  //     console.log(x.trip);
  //     console.log(x.voucher);
  //   });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            {tHead?.map((head, idx) => (
              <td key={idx}>{head}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            {tBody?.map((body, idx) => (
              <td key={idx}>
                <p>User ID : {body.id?.userID}</p>
                <p>Employee ID : {body.id?.employeeID}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
