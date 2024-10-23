import { create } from 'zustand';

type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  city: string
}

interface TableState {
  data: User[];
  setData: (newData: User[]) => void;
}

export const useDataTableStore = create<TableState>((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
}));
