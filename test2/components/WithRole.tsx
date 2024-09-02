// hoc/withRole.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { handleFetchUserAttributes } from './authUtils';
import { useRouter } from 'next/navigation';

import { Amplify } from 'aws-amplify';
import {ampConfig} from '../aws-amp-config';


Amplify.configure(ampConfig);

const WithRole = (allowedRole: string, Component: React.ComponentType) => {
  return (props: any) => {
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const fetchUserAttributes = async () => {
        try {
          const currentUserAttributes: any = await handleFetchUserAttributes();
          const userGroup = currentUserAttributes['custom:group'];
          console.log('User Group:', userGroup);

          // Check if the user belongs to the allowed group
          if (userGroup === allowedRole) {
            setAuthorized(true);
          } else {
            router.push('/unauthorized'); // Redirect to an unauthorized page
          }
        } catch (error) {
          router.push('/login'); // Redirect to login if there's an error (e.g., not authenticated)
        }
      };

      fetchUserAttributes();
    }, [router, allowedRole]);

    if (!authorized) return null;

    return <Component {...props} />;
  };
};

export default WithRole;
