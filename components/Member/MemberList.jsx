import React from "react";
import MemberItem from "./MemberItem";

const memberList = [
  {
    id: 1,
    name: "Zildjian Vito Sulaiman",
    division: "Frontend",
    posisi: "Member",
    lastActive: "19 Sept 2023",
  },
];

function MemberList() {
  return (
    <div className="bg-white mt-5 p-5 rounded-lg">
      <h2 className="text-[18px] font-bold">Member Terbaru</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 font-semibold text-[14px] border-b pb-2 mt-3 border-gray-300 text-gray-400">
        <h2 className="ml-12">Nama</h2>
        <div className="grid grid-cols-3">
          <h2>Terakhir Aktif</h2>
          <h2>Posisi</h2>
          <h2></h2>
        </div>
      </div>
      {memberList &&
        memberList.map((item, index) => (
          <MemberItem key={index} member={item} />
        ))}
    </div>
  );
}

export default MemberList;
