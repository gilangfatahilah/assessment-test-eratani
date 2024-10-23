import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

export type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  city: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "city",
    header: "City",
    cell: ({ row }) => {
      return String(row.original.city)
    }
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <CellAction data={row.original} />
    }
  },
]
