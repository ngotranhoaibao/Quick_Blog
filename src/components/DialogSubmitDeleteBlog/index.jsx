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

export function DialogSubmitDeleteBlog({
  open,
  onOpenChange,
  onConfirmDelete,
  postTitle = "",
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="text-red-500">
            Confirm delete "<span className="font-semibold">{postTitle}</span>"
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to delete this
            post?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2 mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline" >
              Cancel
            </Button>
          </DialogClose>

          <Button onClick={onConfirmDelete} type="button" variant="destructive">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default DialogSubmitDeleteBlog;
