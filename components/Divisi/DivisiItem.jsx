import Link from "next/link";
import React from "react";
import { FcFolder } from "react-icons/fc";

function DivisiItem({ divisi }) {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[120px] border rounded-lg p-4 hover:scale-105 hover:shadow-md transition-all cursor-pointer">
      <FcFolder className="w-10 h-10" />
      <h2 className="line-clamp-2 text-center">{divisi.name}</h2>
    </div>
  );
}

export default DivisiItem;
