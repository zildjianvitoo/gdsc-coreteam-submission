import React from "react";

function MemberInfoItem({ item }) {
  return (
    <>
      <div
        className="flex justify-between
        items-center mt-3 border-b-[1px] pb-2"
      >
        <div className="flex items-center gap-4">
          <div className={`${item.bgColor} p-3 rounded-md`}>{item.logo}</div>
          <div>
            <h2 className="text-[14px] font-semibold">{item.type}</h2>
            <h2 className="text-[12px] mt-[-4px] text-gray-400">{item.desc}</h2>
          </div>
        </div>
        <div className="font-semibold">{item.size}</div>
      </div>
    </>
  );
}

export default MemberInfoItem;
