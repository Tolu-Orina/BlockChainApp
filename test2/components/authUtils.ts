import { signUp, confirmSignUp, autoSignIn, signIn, signOut, fetchAuthSession,
      getCurrentUser, type SignInInput, type ConfirmSignUpInput } from 'aws-amplify/auth';



// Type for SignUp parameters
export type SignUpParameters = {
  username: string;
  password: string;
  email: string;
};

// Function to handle user sign-up
export async function handleSignUp({
  username,
  password,
  email
}: SignUpParameters) {
  try {
    const signUpResult = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });
    console.log('Sign Up Result:', signUpResult);
    return signUpResult;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
}

// Function to handle sign-up confirmation
export async function handleSignUpConfirmation({
  username,
  confirmationCode,
}: ConfirmSignUpInput) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({username, confirmationCode});
    return { isSignUpComplete, nextStep };
  } catch (error) {
    console.error('Error confirming sign up:', error);
    throw error;
  }
}

// Function to handle automatic sign-in after confirmation
export async function handleAutoSignIn() {
  try {
    const signInOutput = await autoSignIn();
    return signInOutput;
  } catch (error) {
    console.error('Error during auto sign-in:', error);
    throw error;
  }
}

// Function to handle user sign-in
export async function handleSignIn({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({username, password});
    return { isSignedIn, nextStep };
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}

// Function to handle user sign-out
export async function handleSignOut() {
  try {
    await signOut({ global: true });
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}

export async function currentAuthenticatedUser() {
  try {
    const currentUserOutput= await getCurrentUser();
    return currentUserOutput;
  } catch (err) {
    console.log(err);
  }
}

async function currentSession() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};

    return accessToken
  } catch (err) {
    console.log(err);
  }
}