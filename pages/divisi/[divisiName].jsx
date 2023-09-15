import DivisiItem from "@/components/Divisi/DivisiItem";
import DivisiList from "@/components/Divisi/DivisiList";
import MemberList from "@/components/Member/MemberList";
import SearchBar from "@/components/SearchBar";
import { db } from "@/config/firebase";
import { parentDivisiIdAtom } from "@/store/parentDivisiIdAtom";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function DivisiName() {
  const [divisiList, setDivisiList] = useState([]);
  const [memberList, setMemberList] = useState([]);
  const [parentDivisiId, setParentDivisiId] = useAtom(parentDivisiIdAtom);
  const router = useRouter();
  const { id, name } = router.query;
  console.log(name);

  useEffect(() => {
    if (router.isReady) {
      const memberRef = collection(db, "member");
      const memberQuery = query(memberRef, where("divisi", "==", name));
      const unsub = onSnapshot(memberQuery, ({ docs }) => {
        const listOfMember = docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMemberList(listOfMember);
      });

      const getAllMember = async () => {
        const { docs } = await getDocs(memberQuery);

        const listOfMember = docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMemberList(listOfMember);
      };
      getAllMember();
      return () => unsub();
    }
  }, [name, router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      setParentDivisiId(id);
      const divisiRef = collection(db, "divisi");
      const q = query(divisiRef, where("parentDivisiId", "==", id));

      const unsub = onSnapshot(q, ({ docs }) => {
        const listOfDivisi = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setDivisiList(listOfDivisi);
      });

      const getAllDivisi = async () => {
        const { docs } = await getDocs(q);

        const listOfDivisi = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setDivisiList(listOfDivisi);
      };
      getAllDivisi();
      return () => unsub;
    }
  }, [id]);

  return (
    <main className="bg-[#F2F7FF] p-5 md:min-h-screen">
      <div className="flex gap-3 w-full items-center">
        <RxHamburgerMenu
          className="text-2xl flex md:hidden"
          onClick={() => setShowSideBar((prev) => !prev)}
        />
        <SearchBar />
      </div>

      <DivisiList divisiList={divisiList} parentDivisiName={name} />
      {name != "Non Technical" && name != "Technical" && (
        <MemberList memberList={memberList} divisiName={name} />
      )}
    </main>
  );
}

export default DivisiName;
