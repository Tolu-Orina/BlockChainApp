// app/patient/records/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import WithAuth from '@/components/WithAuth';
import Navbar from '@/components/Navbar';

const PatientRecords: React.FC = () => {
  return (
    <div className="container mx-auto p-4 w-full lg:w-4/5">
      <Navbar/>
      <h1 className="text-2xl font-bold mb-4">Manage Health Data</h1>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl">Your Health Records</h2>
        <Link href="/records/new" className="bg-green-500 text-white px-4 py-2 rounded-md">
          Add New Record
        </Link>
      </div>
      {/* This will reuse the Records table component */}
      <div>
        <Link href="/records" className="text-blue-500">
          View Your Records
        </Link>
      </div>
    </div>
  );
};

export default WithAuth(PatientRecords);
