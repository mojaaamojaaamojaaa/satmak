"use client";
import { signIn, signOut, useSession } from "next-auth/react";
//未使用。将来使うかも？
const AuthButtons = () => {
  const { data: session } = useSession();
  return (
    <div>
      <p>
        Hello :
        <code className="font-mono font-bold">
          {session?.user?.name ?? "guest"}
        </code>
      </p>
      {!session && <button onClick={() => signIn()}>Sign In</button>}
      {session && <button onClick={() => signOut()}>Sign Out</button>}
    </div>
  );
};

export default AuthButtons;
