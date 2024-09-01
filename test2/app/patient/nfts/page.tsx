// app/patient/nfts/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import WithAuth from '@/components/WithAuth';
import React, { useState } from 'react';

const PatientNFTs: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [tokenId, setTokenId] = useState('');

  const handleTransferNFT = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to transfer NFT using Ethereum smart contract
    console.log('Transfer NFT:', { recipient, tokenId });
  };

  const handleIssueNFT = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to issue a new NFT
    console.log('Issue New NFT');
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4 w-full lg:w-4/5">
      
      <h1 className="text-2xl font-bold mb-4">Manage NFTs</h1>
      <div className="space-y-4">
        <form onSubmit={handleTransferNFT} className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl mb-4">Transfer NFT</h2>
          <div>
            <label className="block text-sm font-medium">Recipient Address</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Token ID</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Transfer NFT
          </button>
        </form>

        <form onSubmit={handleIssueNFT} className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl mb-4">Issue New NFT</h2>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
            Issue NFT
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default WithAuth(PatientNFTs);
