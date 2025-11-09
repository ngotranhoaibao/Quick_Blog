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

const DialogSubmitDeleteUser = ({
  open,
  setOpen,
  username = "",
  onConfirm,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-red-600">
            Xóa người dùng "<span className="font-semibold">{username}</span>"
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to delete?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2 mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline" >
              Cancel
            </Button>
          </DialogClose>

          <Button
            type="button"
            variant="destructive"
            onClick={onConfirm}

          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSubmitDeleteUser;
