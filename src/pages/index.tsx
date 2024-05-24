import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { LoginForm, DashboardTemplate } from "~/components";

import { api } from "~/utils/api";

export default function Home() {
  const ses = useSession();
  if (ses.status === "loading") {
    return <div>loading</div>;
  } else if (ses.status === "authenticated") {
    return (
      <>
        <main className="flex h-full w-full">
          <DashboardTemplate active_tile="Home"></DashboardTemplate>
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
