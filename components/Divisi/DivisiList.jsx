import React, { useEffect, useState } from "react";
import DivisiItem from "./DivisiItem";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/config/firebase";

// const divisiList = [
//   {
//     id: 1,
//     name: "FE",
//   },
//   {
//     id: 2,
//     name: "BE",
//   },
//   {
//     id: 3,
//     name: "MobDev",
//   },
//   {
//     id: 4,
//     name: "ML",
//   },
//   {
//     id: 5,
//     name: "UI/UX",
//   },
// ];

function DivisiList() {
  const [divisiList, setDivisiList] = useState([]);
  const divisiRef = collection(db, "divisi");

  useEffect(() => {
    const unsub = onSnapshot(divisiRef, ({ docs }) => {
      const listOfDivisi = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDivisiList(listOfDivisi);
    });

    const getAllDivisi = async () => {
      const { docs } = await getDocs(divisiRef);

      const listOfDivisi = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDivisiList(listOfDivisi);
    };
    getAllDivisi();
    return unsub();
  }, []);

  return (
    <div className="p-5 mt-5 bg-white rounded-lg ">
      <h2 className="text-[17px] font-bold items-center flex justify-between">
        Divisi{" "}
        <span className="text-blue-500 font-normal text-[15px]">
          Lihat Semua
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-5">
        {divisiList?.map((item, index) => (
          <DivisiItem key={index} divisi={item} />
        ))}
      </div>
    </div>
  );
}

export default DivisiList;
