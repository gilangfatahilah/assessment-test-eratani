import { DataTable } from './components/data-table';
import { columns } from './components/data-table/columns';
import { useEffect } from 'react';
import { useDataTableStore } from './hooks/useDataTableStore';
import DATA from './assets/data/DATA.json';

function App() {
  const { data, setData } = useDataTableStore();

  useEffect(() => {
    const storedData = localStorage.getItem('tableData');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(DATA);
    }
  }, [setData]);

  return (
    <main className='h-full'>
      <div className="container mx-auto py-10">
        <h1 className='font-bold leading-tight text-3xl text-primary text-center'>
          Simple CRUD Data Table
        </h1>
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}

export default App;
