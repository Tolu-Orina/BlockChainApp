// // hoc/withRole.tsx
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { currentAuthenticatedUser } from './authUtils';
// import { useRouter } from 'next/navigation';

// const WithRole = (role: string, Component: React.ComponentType) => {
//   return (props: any) => {
//     const [authorized, setAuthorized] = useState(false);
//     const router = useRouter();

//     useEffect(() => {
//       currentAuthenticatedUser()
//         .then(currentUserOutput => {
//           const { username, userId, signInDetails } = currentUserOutput;
//           console.log(username, userId, signInDetails)

//           // const userGroups = user.signInUserSession.accessToken.payload['cognito:groups'] || [];
//           // if (userGroups.includes(role)) {
//           //   setAuthorized(true);
//           // } else {
//           //   router.push('/unauthorized');
//           // }
//         })
//         .catch(() => router.push('/login'));
//     }, [router, role]);

//     if (!authorized) return null;

//     return <Component {...props} />;
//   };
// };

// export default WithRole;
