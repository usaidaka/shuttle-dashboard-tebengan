import { ReactNode } from "react";

/* SIDEBAR */
export type Menu = {
  title: string;
  icon: ReactNode;
  to: string;
};

/* RECAP */
export type Recap = {
  count: number;
  title: string;
};

/* TABLE */
type DetailAddress = {
  path: string;
  title: string;
  depart: string;
  arrival: string;
};

type Address = {
  home?: DetailAddress;
  work?: DetailAddress;
};

type Voucher = {
  id: number;
  title: string;
  detail: string;
};

export type UserData = {
  ID: {
    userID: number;
    employeeID: string;
    device: string;
    date: string;
    firstLogin: string;
  };
  Status: {
    position: string;
    lastActive: string;
    lastBook: string;
  };
  Name: {
    fullName: string;
    gender: string;
    photo: string;
    company: string;
    department: string;
  };
  Contact: {
    phone: string;
    email: string;
  };
  Address: Address[];
  Trip: string;
  Voucher: Voucher[];
};

/* TABLE */
export type Table = {
  table: string;
  tHead: string[];
  tBody: UserData[] | undefined;
  loading: boolean;
};
