import React, { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";

type AuthUser = {
  user_metadata?: {
    user_name?: string;
  };
  email?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  signInWithEmail: () => void;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user, isSignedIn } = useUser();
  const clerk = useClerk();

  const normalizedUser = useMemo<AuthUser | null>(() => {
    if (!isSignedIn || !user) return null;

    const email =
      user.emailAddresses?.[0]?.emailAddress ??
      user.primaryEmailAddress?.emailAddress;

    const user_name =
      user.firstName ?? user.username ?? user.fullName ?? undefined;

    return {
      user_metadata: { user_name },
      email,
    };
  }, [user, isSignedIn]);

  const value = {
    user: normalizedUser,
    signInWithEmail: () => {
      clerk.openSignIn();
    },
    signOut: async () => {
      await clerk.signOut();
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};

export default AuthContext;
