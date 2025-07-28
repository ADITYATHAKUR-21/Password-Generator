import { SignIn, SignUp, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

function App() {
  return (
    <main>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <div>Welcome to your dashboard!</div>
      </SignedIn>
    </main>
  );
}

export default App;
