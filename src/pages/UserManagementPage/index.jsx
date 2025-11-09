import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteUser, getUsers, setRoleUser } from "@/services/api/auth";
import DialogSubmitChangeRole from "@/components/DialogSubmitChangeRole";
import DialogSubmitDeleteUser from "@/components/DialogSubmitDeleteUser";
import ListUser from "@/components/ListUser";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [openChangeRole, setOpenChangeRole] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loadingList, setLoadingList] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [role, setRole] = useState("user");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoadingList(true);
      const result = await getUsers();
      setUsers(result?.data?.items ?? []);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Tải danh sách user thất bại");
    } finally {
      setLoadingList(false);
    }
  };

  const handleOpenRoleDialog = (user) => {
    setSelectedUser(user);
    setRole(user?.role || "user");
    setOpenChangeRole(true);
  };

  const handleOpenDeleteDialog = (user) => {
    setSelectedUser(user);
    setOpenDelete(true);
  };

  const handleConfirmDeleteUser = async () => {
    if (!selectedUser?._id) return;
    try {
      setDeleting(true);
      await deleteUser(selectedUser._id);

      setUsers((prev) => prev.filter((u) => u._id !== selectedUser._id));
      toast.success("Xóa user thành công!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Xóa user thất bại");
    } finally {
      setDeleting(false);
      setOpenDelete(false);
      setSelectedUser(null);
    }
  };

  const handleConfirmRoleChange = async () => {
    if (!selectedUser?._id || !role) return;

    try {
      const res = await setRoleUser(selectedUser._id.trim(), { role });

      if (res.status === 200) {
        toast.success("Đổi role thành công!");
        setUsers((prev) =>
          prev.map((u) =>
            u._id === selectedUser._id ? { ...u, role } : u
          )
        );
        setOpenChangeRole(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Đổi role thất bại");
    }
  };

  return (
    <div className="overflow-auto">
      <h2 className="hero-title text-3xl sm:text-5xl font-semibold sm:leading-[4rem] text-primary text-center mt-10 mb-8">
        🧩 User Management
      </h2>

      <ListUser
        users={users}
        loading={loadingList}
        onDelete={handleOpenDeleteDialog}
        onChangeRole={handleOpenRoleDialog}
      />

      <DialogSubmitChangeRole
        open={openChangeRole}
        setOpen={setOpenChangeRole}
        handleConfirmRoleChange={handleConfirmRoleChange}
        handleRoleChange={setRole}
        role={role}
      />

      <DialogSubmitDeleteUser
        open={openDelete}
        setOpen={setOpenDelete}
        username={selectedUser?.username || ""}
        onConfirm={handleConfirmDeleteUser}
        loading={deleting}
      />
    </div>
  );
}
