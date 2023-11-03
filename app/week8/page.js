"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        <>
          <p>
            Welcome, {user?.displayName} ({user?.email})
          </p>
          <p>
            <Link className="hover:bg-blue-200" href="/week8/shopping-list">
              shopping-list
            </Link>
          </p>
          <button
            className="m-2 p-1 rounded bg-blue-500"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </>
      ) : (
        <button className="m-2 p-1 rounded bg-blue-500" onClick={handleSignIn}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default Page;
