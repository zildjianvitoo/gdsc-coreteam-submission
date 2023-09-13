import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      console.log(session);
      router.replace("/");
    }
  }, [session, router]);

  return (
    <main className="flex justify-center items-center h-screen">
      <button
        onClick={() => signIn("google")}
        className="px-6 py-4 bg-blue-400 rounded-lg text-white text-xl"
      >
        Masuk dengan google
      </button>
    </main>
  );
}

export default Login;
