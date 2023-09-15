import { db } from "@/config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

function MemberInfo() {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    const memberRef = collection(db, "member");
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

  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl">Total Member {memberList.length}</h2>
      <div className="w-full bg-gray-200 rounded-lg h-2.5 flex">
        <div className="bg-blue-400 h-2.5 w-1/4 rounded-lg rounded-r-none"></div>
        <div className="bg-[#FBBB04] h-2.5 w-[30%] rounded-l-none "></div>
        <div className="bg-[#0F9E59] h-2.5 w-[15%] rounded-l-none rounded-lg "></div>
      </div>
    </div>
  );
}

export default MemberInfo;
