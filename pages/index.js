import { signOut, useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.replace("/login");
    }
  }, [session, router]);

  return (
    <main className="bg-[#F2F7FF]">
      {" "}
      <button onClick={() => signOut("google")}>Home</button>
    </main>
  );
}
