import { ReactNode } from "react";

export type Menu = {
  title: string;
  icon: ReactNode;
  to: string;
};

export type Recap = {
  count: number;
  title: string;
};
