import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useDataTableStore } from '@/hooks/useDataTableStore'
import { toast } from 'sonner'

const formSchema = z.object({
  id: z.number(),
  first_name: z.string().min(2, { message: "First name must be at least 2 characters." }),
  last_name: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
})

type FormValues = z.infer<typeof formSchema>

interface Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  user?: FormValues
}

export default function UserFormDialog({ open, setOpen, user }: Props) {
  const { data, setData } = useDataTableStore();
  const isEditMode = !!user

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: user ?? {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      city: "",
    },
  })

  const handleSubmit = (value: FormValues) => {
    let updatedData;

    if (isEditMode) {
      updatedData = data.map(d => (d.id === value.id ? value : d));
    } else {
      value.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      updatedData = [...data, value];
    }

    setData(updatedData);
    localStorage.setItem('tableData', JSON.stringify(updatedData));
    toast.success(`Successfully ${isEditMode ? 'updated' : 'created'} data!`);
    setOpen(false);
    form.reset();
  }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditMode ? "Edit User" : "Create New User"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="New York" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}