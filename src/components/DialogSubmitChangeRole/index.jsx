import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconShieldCheckFilled, IconUser } from "@tabler/icons-react";
import { Label } from "@/components/ui/label";

const DialogSubmitChangeRole = ({
  open,
  setOpen,
  handleConfirmRoleChange,
  handleRoleChange,
  role,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change User Role</DialogTitle>
          <DialogDescription>
            Select the new role for this user. This action will take effect immediately.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-2">
          <Label>Select Role</Label>

          <Select value={role} onValueChange={handleRoleChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose role" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Available Roles</SelectLabel>

                <SelectItem className="text-black" value="user">
                  <IconUser stroke={2} className="mr-2 h-4 w-4" />
                  User
                </SelectItem>

                <SelectItem value="admin">
                  <IconShieldCheckFilled className="mr-2 text-yellow-600 h-4 w-4" />
                  Admin
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" >Cancel</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button onClick={handleConfirmRoleChange}>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSubmitChangeRole;
