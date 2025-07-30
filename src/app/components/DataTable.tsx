'use client';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Papa from 'papaparse';
 
 
 import { toast } from 'sonner';


import { useEffect, useState } from 'react';



interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

const initialData: UserData[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Admin' },
  { id: 2, name: 'Rahul Sharma', email: 'rahul.sharma@admybrand.ai', role: 'Editor' },
  { id: 3, name: 'Linda Martínez', email: 'linda.martinez@sample.org', role: 'Viewer' },
  { id: 4, name: 'Michael Chen', email: 'michael.chen@company.com', role: 'Editor' },
  { id: 5, name: 'Sara O’Connor', email: 'sara.oconnor@domain.net', role: 'Admin' },
  { id: 6, name: 'David Kim', email: 'david.kim@gmail.com', role: 'Viewer' },
  { id: 7, name: 'Elizabeth Wong', email: 'e.wong@startup.co', role: 'Editor' },
  { id: 8, name: 'Carlos Silva', email: 'carlos.silva@marketing.io', role: 'Admin' },
  { id: 9, name: 'Priya Patel', email: 'priya.patel@businesshub.com', role: 'Editor' },
  { id: 10, name: 'Fatima Al-Farsi', email: 'fatima.alfarsi@enterprise.com', role: 'Viewer' },
  { id: 11, name: 'Robert Müller', email: 'robert.mueller@sample.net', role: 'Editor' },
  { id: 12, name: 'Yuki Nakamura', email: 'yuki.nakamura@sample.co.jp', role: 'Admin' },
];

export default function DataTable() {
  const [data, setData] = useState<UserData[]>(initialData);
  const [isLive, setIsLive] = useState(true);

  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState<keyof UserData>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const filteredData = data
    .filter(({ name, email, role }) =>
      name.toLowerCase().includes(search.toLowerCase()) ||
      email.toLowerCase().includes(search.toLowerCase()) ||
      role.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      if (typeof valA === 'string') {
        return sortOrder === 'asc'
          ? valA.localeCompare(valB as string)
          : (valB as string).localeCompare(valA);
      }
      return sortOrder === 'asc'
        ? (valA as number) - (valB as number)
        : (valB as number) - (valA as number);
    });


  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const toggleSort = (field: keyof UserData) => {
    if (field === sortField) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };
  const exportCSV = () => {
    const csv = Papa.unparse(filteredData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'users.csv');
    link.click();

      toast.success("CSV exported successfully!"); // ✅
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['ID', 'Name', 'Email', 'Role'];
    const tableRows = filteredData.map((user) => [
      user.id.toString(),
      user.name,
      user.email,
      user.role,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [52, 152, 219] },
    });

    doc.save('users.pdf');

      toast.success("PDF exported successfully!"); // ✅
  };




  useEffect(() => {
    setCurrentPage(1);
  }, [search]);


  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const id = Date.now();
      const newUser: UserData = {
        id,
        name: `Live User ${id % 1000}`,
        email: `live${id % 1000}@example.com`,
        role: ['Admin', 'Editor', 'Viewer'][Math.floor(Math.random() * 3)],
      };
      setData((prev) => [...prev, newUser]);
    }, 8000);

    return () => clearInterval(interval);
  }, [isLive]); // re-run only when `isLive` changes




  return (
    <div className="mt-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl shadow-md overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        {/* 👈 Left: Live Toggle Button */}
        <button
          onClick={() => setIsLive((prev) => !prev)}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
        >
          {isLive ? '🛑 Stop Live Table' : '▶️ Start Live'}
        </button>

        {/* 👉 Right: Export Buttons */}
        <div className="flex gap-2">
          <button
            onClick={exportCSV}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Export CSV
          </button>
          <button
            onClick={exportPDF}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
          >
            Export PDF
          </button>
        </div>
      </div>



      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-sm"
        />
      </div>

      <table className="min-w-full text-sm border-collapse">
        <thead>
          <tr className="text-left border-b dark:border-gray-700">
            {['id', 'name', 'email', 'role'].map((field) => (
              <th
                key={field}
                className="cursor-pointer p-2 font-semibold hover:underline"
                onClick={() => toggleSort(field as keyof UserData)}
              >
                {field.toUpperCase()} {sortField === field ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((user) => (
            <tr key={user.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

