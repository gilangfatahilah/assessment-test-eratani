import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useFetch } from "./hooks/useFetch"
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert"
import { AlertCircle } from "lucide-react"
import { Skeleton } from "./components/ui/skeleton"

type User = {
  id: number
  name: string
  email: string
  gender: 'male' | 'female'
  status: 'active' | 'inactive'
}

export default function App() {
  const { data: datas, loading, error } = useFetch<User[]>('https://gorest.co.in/public/v2/users');

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-xl md:text-4xl font-bold leading-tight text-primary text-center mb-4">
        Simple Data Table
      </h1>
      {
        error
          ? (
            <Alert variant="destructive" className="w-full md:w-1/2 mx-auto">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Failed to fetch data, unexpected error occurred. Please try again later.
              </AlertDescription>
            </Alert>
          )
          : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading
                    ? Array.from({ length: 10 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell><Skeleton className="h-6 w-[150px]" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-[200px]" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-[60px]" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-[80px]" /></TableCell>
                      </TableRow>
                    ))
                    : datas?.map((data, index) => (
                      <TableRow key={index}>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell>{data.gender}</TableCell>
                        <TableCell>
                          <Badge variant={data.status === 'active' ? 'default' : 'secondary'}>
                            {data.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </div>
          )
      }
    </div>
  )
}