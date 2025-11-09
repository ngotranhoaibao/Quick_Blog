import React from "react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Spinner } from "@/components/ui/spinner";
import { IconKey, IconTrashX } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";

const ListUser = ({ users, loading, onDelete, onChangeRole }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>USERNAME</TableHead>
          <TableHead>EMAIL</TableHead>
          <TableHead className="text-center lg:text-start">ROLE</TableHead>
          <TableHead className="text-center lg:text-start">ACTION</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={4}>
              <div className="min-h-[400px] w-full flex justify-center items-center">
                <Spinner />
              </div>
            </TableCell>
          </TableRow>
        ) : users?.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4}>
              <div className="min-h-[200px] w-full flex justify-center items-center">
                Không có user nào.
              </div>
            </TableCell>
          </TableRow>
        ) : (
          users?.map((u) => (
            <TableRow key={u._id}>
              <TableCell>{u.username}</TableCell>
              <TableCell className="text-ellipsis overflow-hidden whitespace-nowrap max-w-[500px]">
                {u.email}
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs capitalize">
                  {u.role}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <button
                    onClick={() => onDelete(u)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md flex items-center gap-1"
                  >
                    <IconTrashX className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onChangeRole(u)}
                    className="bg-primary/10 text-primary px-2 py-1 rounded-md flex items-center gap-1"
                  >
                    <IconKey className="w-5 h-5" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default ListUser;
