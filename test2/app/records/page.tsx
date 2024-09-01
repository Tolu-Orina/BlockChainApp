// app/records/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface Record {
  id: string;
  patientName: string;
  provider: string;
  ipfsHash: string;
}

const mockRecords: Record[] = [
  { id: '1', patientName: 'John Doe', provider: 'HealthCare Provider 1', ipfsHash: 'QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8aV5mNftBqD7P' },
  { id: '2', patientName: 'Jane Smith', provider: 'HealthCare Provider 2', ipfsHash: 'QmPChd2hUzW3j8SkRp6J8b8J5KLRVnANXtbREwddFGH7zJ' },
];

const RecordsPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto min-h-screen p-4 w-full lg:w-4/5">
      <h1 className="text-2xl font-bold mb-4">Patient Medical Records</h1>
      <Link href="/records/new" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add New Record
      </Link>
      <table className="min-w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2">Patient Name</th>
            <th className="py-2 px-4 border-b-2">Provider</th>
            <th className="py-2 px-4 border-b-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockRecords.map((record) => (
            <tr key={record.id}>
              <td className="py-2 px-4 border-b">{record.patientName}</td>
              <td className="py-2 px-4 border-b">{record.provider}</td>
              <td className="py-2 px-4 border-b">
                <Link href={`/records/${record.id}`} className="text-blue-500">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  );
};

export default RecordsPage;
