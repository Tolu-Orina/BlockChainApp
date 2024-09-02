import { Amplify, type ResourcesConfig } from 'aws-amplify';

export const ampConfig = {
  Auth: { 
    Cognito: {
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
      signUpVerificationMethod: 'code',
      loginWith: {
        username: true,
      }
    }
  }
} as ResourcesConfig


// export const ampConfig = {
//   Auth: { 
//     Cognito: {
//       userPoolClientId: "7n0seqfh9e2e97mrp14b4dcknm",
//       userPoolId: "us-east-1_eH3KhD7Is",
//       signUpVerificationMethod: 'code',
//       loginWith: {
//         username: true,
//       }
//     }
//   }
// } as ResourcesConfig