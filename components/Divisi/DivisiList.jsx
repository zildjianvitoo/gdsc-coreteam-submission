import React, { useEffect, useState } from "react";
import DivisiItem from "./DivisiItem";

import { db } from "@/config/firebase";
import { useRouter } from "next/router";

function DivisiList({ divisiList, parentDivisiName }) {
  const router = useRouter();

  const onDivisiClick = (divisi) => {
    router.push({
      pathname: `/divisi/${divisi.name}`,
      query: {
        name: divisi.name,
        id: divisi.id,
      },
    });
  };
  return (
    <div className="p-5 mt-5 bg-white rounded-lg ">
      <h2 className="text-[17px] font-bold items-center flex justify-between">
        Divisi {parentDivisiName}
        <span className="text-blue-500 font-normal text-[15px]">
          Lihat Semua
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-5">
        {divisiList?.map((item, index) => (
          <div key={index} onClick={() => onDivisiClick(item)}>
            <DivisiItem divisi={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DivisiList;
