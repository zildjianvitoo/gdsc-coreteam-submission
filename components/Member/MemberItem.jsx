import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

function MemberItem({ member }) {
  return (
    <div
      className="grid grid-cols-1
    md:grid-cols-2 justify-between
    cursor-pointer hover:bg-gray-100
    p-3 rounded-md"
    >
      <div className="flex gap-2 items-center">
        <AiOutlineUser className="text-2xl" />
        <h2 className="text-[15px] truncate">{member.name}</h2>
      </div>
      <div className="grid grid-cols-3 place-content-start">
        <h2 className="text-[15px]">29 juni 2022</h2>
        <h2></h2>
        <h2 className="text-[15px]">
          <FaRegTrashAlt
            className="w-5 h-5 text-red-500
           hover:scale-110 transition-all"
          />
        </h2>
      </div>
    </div>
  );
}

export default MemberItem;
