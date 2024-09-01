// components/Navbar.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { currentAuthenticatedUser, handleSignOut } from './authUtils';

import { Amplify } from 'aws-amplify';
import { ampConfig } from '../aws-amp-config';

Amplify.configure(ampConfig);

const Navbar: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const user = await currentAuthenticatedUser();
        setAuthenticated(!!user);
      } catch {
        setAuthenticated(false);
      }
    };
    checkAuthentication();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = async () => {
    try {
      await handleSignOut();
      setAuthenticated(false);
      router.push('/login');
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <nav className="bg-gray-900 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/medivault2-removebg-preview.png" // Replace with your logo path
              alt="Logo"
              width={250}
              height={50}
              style={{ objectFit: 'cover' }}
              quality={95}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-lg font-bold">Home</Link>
          <Link href="/patient" className="text-lg font-bold">Patients</Link>
          <Link href="/provider" className="text-lg font-bold">Providers</Link>
          <Link href="/about" className="text-lg font-bold">About</Link>
          <div className="relative mx-5">
            {authenticated ? (
              <div className="relative">
                <Image
                  src="/avatar.png" // Placeholder avatar image
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                  onClick={toggleDropdown}
                />
                {dropdownVisible && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200">
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="text-lg font-bold">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
