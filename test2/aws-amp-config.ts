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
  // API: {
  //   GraphQL: {
  //     endpoint: 'https://f75q733uhbfh7a77d2ccx422wa.appsync-api.us-east-1.amazonaws.com/graphql',
  //     region: 'us-east-1',
  //     defaultAuthMode: 'apiKey',
  //     apiKey: 'da2-lo5jctdupfagrbie35s3fgkogi'
  //   }
  // },
  // Storage: {
  //   S3: {
  //     region: "us-east-1",
  //     bucket: "test-cil-findme-upload",
  //   }
  // }
} as ResourcesConfig
