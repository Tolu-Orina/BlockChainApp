// app/provider/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WithRole from '@/components/WithRole';

const ProviderDashboard: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto min-h-screen p-4 w-full lg:w-4/5">
      <h1 className="text-2xl font-bold mb-4">Healthcare Provider Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/provider/requests" className="bg-yellow-500 text-white p-4 rounded-md text-center">
          Request Patient Data
        </Link>
        <Link href="/provider/nfts" className="bg-purple-500 text-white p-4 rounded-md text-center">
          View Granted NFTs
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default WithRole('provider', ProviderDashboard);
