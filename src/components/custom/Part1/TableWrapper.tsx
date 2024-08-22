'use client';
import { setUsers, UsersState } from "@/lib/redux/slices/users-slice";
import Table from "./Table";
import { useAppDispatch } from "@/lib/redux/hooks";

export default function TableWrapper({users}: TableWrapperProps) {
  const dispatch = useAppDispatch();
  dispatch(setUsers(users));
  return <Table/>
}

interface TableWrapperProps {
  users: UsersState[];
}