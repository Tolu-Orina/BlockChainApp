// app/page.tsx
'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="relative min-h-screen flex flex-col">
      
      <div className="flex-grow flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/healthcare-bg.png" // Replace with your background image path
            alt="Background"
            layout="fill"
            style={{objectFit:"cover", opacity: 0.2}}
            quality={95}
            className="filter blur-sm"
            priority
          />
        </div>
        <div className="relative z-10 text-center p-8 bg-white bg-opacity-75 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Healthcare Portal</h1>
          <p className="text-xl mb-6">Manage your health records securely and efficiently.</p>
          <Link href="/login" className="bg-blue-500 text-white py-2 px-4 rounded">
            Get Started
          </Link>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default LandingPage;
