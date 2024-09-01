'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { currentAuthenticatedUser } from './authUtils';

import { Amplify } from 'aws-amplify';
import {ampConfig} from '../aws-amp-config';


Amplify.configure(ampConfig);

const WithAuth = (Component: React.ComponentType) => {
  return (props: any) => {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);
    const router = useRouter();

    useEffect(() => {
      const checkUserAuthentication = async () => {
        try {
          const currentUserOutput = await currentAuthenticatedUser();
          console.log('User output:', currentUserOutput);
          if (currentUserOutput) {
            setAuthenticated(true);
          } else {
            throw new Error('User not authenticated');
          }
        } catch (error) {
          console.error('Error during authentication:', error);
          setAuthenticated(false);
          router.push('/login');
        }
      };

      checkUserAuthentication();
    }, [router]);

    if (authenticated === null) {
      // Optionally render a loading spinner or null while checking auth status
      return <div>Loading...</div>;
    }

    return authenticated ? <Component {...props} /> : null;
  };
};

export default WithAuth;
