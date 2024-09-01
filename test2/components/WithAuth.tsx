'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { currentAuthenticatedUser } from './authUtils';

import { Amplify } from 'aws-amplify';
import {ampConfig} from '../aws-amp-config';


Amplify.configure(ampConfig);

const WithAuth = (Component: React.ComponentType) => {
  const AuthenticatedComponent = (props: any) => {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);
    const router = useRouter();

    useEffect(() => {
      const checkAuthentication = async () => {
        try {
          const user = await currentAuthenticatedUser();
          setAuthenticated(!!user);
        } catch {
          setAuthenticated(false);
          router.push('/login');
        }
      };
      checkAuthentication();
    }, [router]);

    if (authenticated === null) {
      return <div>Loading...</div>; // Or some loading spinner
    }

    if (!authenticated) {
      router.push('/login'); // Or a redirect to login
    }

    return <Component {...props} />;
  };

  // Set the display name for easier debugging
  AuthenticatedComponent.displayName = `WithAuth(${Component.displayName || Component.name || 'Component'})`;

  return AuthenticatedComponent;
};

export default WithAuth;
