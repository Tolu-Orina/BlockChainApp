// app/records/new/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const NewRecordPage: React.FC = () => {
  const [patientName, setPatientName] = useState('');
  const [provider, setProvider] = useState('');
  const [ipfsHash, setIpfsHash] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the new record (to a backend or blockchain, etc.)
    console.log('New Record:', { patientName, provider, ipfsHash });
    router.push('/records');
  };

  return (
    <div className="container mx-auto p-4 w-full lg:w-4/5">
      <h1 className="text-2xl font-bold mb-4">Add New Medical Record</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Patient Name</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Provider</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">IPFS Hash</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={ipfsHash}
            onChange={(e) => setIpfsHash(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Save Record
        </button>
      </form>
    </div>
  );
};

export default NewRecordPage;
