'use client';

import React, { useState } from 'react';
import { handleSignUpConfirmation, handleAutoSignIn } from '../../components/authUtils';
import { useRouter } from 'next/navigation';

import { Amplify } from 'aws-amplify';
import {ampConfig} from '../../aws-amp-config';


Amplify.configure(ampConfig);

const ConfirmSignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleConfirmation = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSignUpConfirmation({ username, confirmationCode });

      // Optionally, auto sign in the user after confirmation
      const signInOutput = await handleAutoSignIn();

      console.log('Auto sign-in output:', signInOutput);
      router.push('/');
    } catch (err) {
      setError('Error confirming sign up. Please check your confirmation code.');
    }
  };

  return (
    <div className="container mx-auto p-4 w-full lg:w-4/5">
      <h1 className="text-2xl font-bold mb-4">Confirm Signup</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        onSubmit={handleConfirmation}
        className="space-y-4 bg-white shadow-md rounded-lg p-4"
      >
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Confirmation Code</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Confirm Signup
        </button>
      </form>
    </div>
  );
};

export default ConfirmSignupPage;
