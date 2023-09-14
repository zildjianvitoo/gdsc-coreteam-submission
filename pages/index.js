import DivisiList from "@/components/Divisi/DivisiList";
import SearchBar from "@/components/SearchBar";
import { useAtom } from "jotai";
import { signOut, useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { sideBarAtom } from "@/store/sideBarAtom";
import MemberList from "@/components/Member/MemberList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  const [showSideBar, setShowSideBar] = useAtom(sideBarAtom);

  useEffect(() => {
    if (!session) {
      router.replace("/login");
    }
  }, [session, router]);

  return (
    <main className="bg-[#F2F7FF] p-5">
      <div className="flex gap-3 w-full items-center">
        <RxHamburgerMenu
          className="text-2xl flex md:hidden"
          onClick={() => setShowSideBar((prev) => !prev)}
        />
        <SearchBar />
      </div>

      <DivisiList />
      <MemberList />
    </main>
  );
}
