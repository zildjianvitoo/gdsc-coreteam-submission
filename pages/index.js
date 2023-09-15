import DivisiList from "@/components/Divisi/DivisiList";
import SearchBar from "@/components/SearchBar";
import { useAtom } from "jotai";
import { signOut, useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { sideBarAtom } from "@/store/sideBarAtom";
import MemberList from "@/components/Member/MemberList";
import { parentDivisiIdAtom } from "@/store/parentDivisiIdAtom";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/config/firebase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [divisiList, setDivisiList] = useState([]);
  const [memberList, setMemberList] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();
  const [showSideBar, setShowSideBar] = useAtom(sideBarAtom);
  const [parentDivisiId, setParentDivisiId] = useAtom(parentDivisiIdAtom);
  const memberRef = collection(db, "member");
  const divisiRef = collection(db, "divisi");

  const divisiQuery = query(divisiRef, where("parentDivisiId", "==", ""));

  useEffect(() => {
    const unsub = onSnapshot(memberRef, ({ docs }) => {
      const listOfMember = docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMemberList(listOfMember);
    });

    const getAllMember = async () => {
      const { docs } = await getDocs(memberRef);

      const listOfMember = docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMemberList(listOfMember);
    };
    getAllMember();
    return () => unsub();
  }, []);

  useEffect(() => {
    setParentDivisiId("");
    if (!session) {
      router.replace("/login");
    }

    const unsub = onSnapshot(divisiQuery, ({ docs }) => {
      const listOfDivisi = docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDivisiList(listOfDivisi);
    });

    const getAllDivisi = async () => {
      const { docs } = await getDocs(divisiQuery);

      const listOfDivisi = docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDivisiList(listOfDivisi);
    };
    getAllDivisi();

    return () => unsub();
  }, [session, router]);

  return (
    <main className="bg-[#F2F7FF] p-5 min-h-screen">
      <div className="flex gap-3 w-full items-center">
        <RxHamburgerMenu
          className="text-2xl flex md:hidden"
          onClick={() => setShowSideBar((prev) => !prev)}
        />
        <SearchBar />
      </div>

      <DivisiList divisiList={divisiList} />
      <MemberList memberList={memberList} />
    </main>
  );
}
