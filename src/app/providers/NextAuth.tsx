"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
//会員制ページを作成する際に使用。
const NextAuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
