import { db } from "@/config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import moment from "moment/moment";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

function MemberItem({ member }) {
  console.log(member);

  const onDeleteDocHandler = async (id) => {
    await deleteDoc(doc(db, "member", id));
  };
  return (
    <div
      className="grid grid-cols-1
    xs:grid-cols-2 lg:grid-cols-5 justify-between
    cursor-pointer hover:bg-gray-100
    p-3 rounded-md"
    >
      <div className="flex gap-2 items-center col-span-2">
        <AiOutlineUser className="text-2xl" />
        <h2 className="text-[15px] truncate">{member.name}</h2>
      </div>
      <div className="grid grid-cols-3 col-span-3 place-content-start">
        <h2 className="text-[14px]">
          {moment(+member.last_active).format("DD MMM YYYY")}
        </h2>
        <h2 className="text-[15px] ml-2">{member.position}</h2>
        <h2
          className="text-[15px]"
          onClick={() => onDeleteDocHandler(member.id)}
        >
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
