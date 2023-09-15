import React from "react";
import MemberItem from "./MemberItem";

function MemberList({ memberList, divisiName }) {
  return (
    <div className="bg-white mt-5 p-5 rounded-lg">
      <h2 className="text-[18px] font-bold">
        Member {divisiName ? divisiName : "Terbaru"}
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 font-semibold text-[14px] border-b pb-2 mt-3 border-gray-300 text-gray-400 ">
        <h2 className="ml-12 col-span-2">Nama</h2>
        <div className="grid grid-cols-3 col-span-3 ">
          <h2>Terakhir Aktif</h2>
          <h2 className="ml-2">Posisi</h2>
          <h2></h2>
        </div>
      </div>
      {memberList?.map((item, index) => (
        <MemberItem key={index} member={item} />
      ))}
    </div>
  );
}

export default MemberList;
