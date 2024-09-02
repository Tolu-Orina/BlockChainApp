// app/patient/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WithRole from '@/components/WithRole';

const PatientDashboard: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto min-h-screen p-4 w-full lg:w-4/5">
      
      <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/patient/records" className="bg-green-500 text-white p-4 rounded-md text-center">
          Manage Health Data
        </Link>
        <Link href="/patient/nfts" className="bg-blue-500 text-white p-4 rounded-md text-center">
          Manage NFTs
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default WithRole('patient', PatientDashboard);
