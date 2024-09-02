'use client';

import React, { useState } from 'react';
import { handleSignUp, handleSignIn, } from './authUtils';
import { useRouter } from 'next/navigation';

import { Amplify } from 'aws-amplify';
import {ampConfig} from '../aws-amp-config';


Amplify.configure(ampConfig);

const AuthPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [group, setGroup] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const email = username;

    
    try {
      await handleSignUp({
        username,
        password,
        email,
        group
      });
      router.push('/confirm-signup'); // Redirect to confirmation page
      setError('');
    } catch (err) {
      setError('Signup failed. Please try again.');
      console.error(err);
    }
  };
  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSignIn({username, password});
      router.push('/patient');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto min-h-screen p-4 mt-12 w-full lg:w-4/5">
      <h1 className="text-2xl font-bold mb-4">{isSignup ? 'Sign Up' : 'Login'}</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        onSubmit={isSignup ? handleSignup : handleLogin}
        className="space-y-4 bg-white shadow-md rounded-lg p-4 lg:w-2/3"
      >
        <div>
          <label className="block text-md font-bold">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={username}
            placeholder="Enter your email"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-md font-bold">Password</label>
          <input
            type="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isSignup && (
          <>
          <div>
            <label className="block text-sm font-medium">Re-enter Password</label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Health user type</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              <option value="">Select user type</option>
              <option value="patient">Patient</option>
              <option value="provider">Provider</option>
            </select>
          </div>
        </>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <div className="mt-4">
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-blue-500 underline"
        >
          {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
