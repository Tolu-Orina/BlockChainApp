// app/provider/requests/page.tsx
'use client';

import React, { useState } from 'react';

const ProviderRequests: React.FC = () => {
  const [patientId, setPatientId] = useState('');

  const handleRequestAccess = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to request access via Hyperledger Fabric
    console.log('Request Access for Patient ID:', patientId);
  };

  return (
    <div className="container mx-auto p-4 w-full lg:w-4/5">
      <h1 className="text-2xl font-bold mb-4">Request Patient Data</h1>
      <form onSubmit={handleRequestAccess} className="bg-white shadow-md rounded-lg p-4">
        <div>
          <label className="block text-sm font-medium">Patient ID</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4">
          Request Access
        </button>
      </form>
    </div>
  );
};

export default ProviderRequests;
