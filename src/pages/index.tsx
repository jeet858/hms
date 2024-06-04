import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { LoginForm, DashboardTemplate } from "~/components";

import { api } from "~/utils/api";
import Dashboard from "./dashboard";

export default function Home() {
  const ses = useSession();
  if (ses.status === "loading") {
    return <div>loading</div>;
  } else if (ses.status === "authenticated") {
    return (
      <>
        <main className="flex h-full w-full">
          <Dashboard />
        </main>
      </>
    );
  } else {
    return (
      <>
        <main className="flex h-full w-full">
          <LoginForm />
        </main>
      </>
    );
  }
}
