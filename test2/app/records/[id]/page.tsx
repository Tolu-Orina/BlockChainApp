// app/records/[id]/page.tsx
'use client';

import React from 'react';
import { useParams } from 'next/navigation';

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

const RecordDetailPage: React.FC = () => {
  const { id } = useParams();

  const record = mockRecords.find((r) => r.id === id);

  if (!record) {
    return <div>Record not found</div>;
  }

  return (
    <div className="container mx-auto p-4 w-full lg:w-4/5">
      <h1 className="text-2xl font-bold mb-4">Record Details</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <p className="mb-2"><strong>Patient Name:</strong> {record.patientName}</p>
        <p className="mb-2"><strong>Provider:</strong> {record.provider}</p>
        <p className="mb-2"><strong>IPFS Hash:</strong> {record.ipfsHash}</p>
      </div>
    </div>
  );
};

export default RecordDetailPage;
