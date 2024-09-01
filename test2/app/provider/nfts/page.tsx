// app/provider/nfts/page.tsx
'use client';

import React from 'react';

const mockNFTs = [
  { tokenId: '1', patientName: 'John Doe', ipfsHash: 'QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8aV5mNftBqD7P' },
  { tokenId: '2', patientName: 'Jane Smith', ipfsHash: 'QmPChd2hUzW3j8SkRp6J8b8J5KLRVnANXtbREwddFGH7zJ' },
];

const ProviderNFTs: React.FC = () => {
  return (
    <div className="container mx-auto p-4 w-full lg:w-4/5">
      <h1 className="text-2xl font-bold mb-4">View Granted NFTs</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {mockNFTs.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2">Token ID</th>
                <th className="py-2 px-4 border-b-2">Patient Name</th>
                <th className="py-2 px-4 border-b-2">IPFS Hash</th>
              </tr>
            </thead>
            <tbody>
              {mockNFTs.map((nft) => (
                <tr key={nft.tokenId}>
                  <td className="py-2 px-4 border-b">{nft.tokenId}</td>
                  <td className="py-2 px-4 border-b">{nft.patientName}</td>
                  <td className="py-2 px-4 border-b">{nft.ipfsHash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No NFTs granted yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProviderNFTs;
