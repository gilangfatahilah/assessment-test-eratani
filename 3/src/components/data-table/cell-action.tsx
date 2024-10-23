import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "./columns";
import { useDataTableStore } from "@/hooks/useDataTableStore";
import { AlertModal } from "../ui/alert-modal";
import { useState } from "react";
import UserFormDialog from "../ui/user-form-dialog";
import { toast } from "sonner";

interface Props {
  data: User;
}

export const CellAction = ({ data }: Props) => {
  const { data: currentData, setData } = useDataTableStore();
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);
  const [openUserFormDialog, setOpenUserFormDialog] = useState<boolean>(false);

  const handleDelete = () => {
    const newData = currentData.filter(d => d.id !== data.id);

    setData(newData);
    localStorage.setItem('tableData', JSON.stringify(newData));

    toast.success('Successfully deleted data!')
    setOpenAlertModal(false);
  };

  return (
    <>
      <AlertModal
        isOpen={openAlertModal}
        onClose={() => setOpenAlertModal(false)}
        onConfirm={handleDelete}
      />

      <UserFormDialog user={data} open={openUserFormDialog} setOpen={setOpenUserFormDialog} />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setOpenUserFormDialog(true)}>
            <Edit /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive" onClick={() => setOpenAlertModal(true)}>
            <Trash /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
