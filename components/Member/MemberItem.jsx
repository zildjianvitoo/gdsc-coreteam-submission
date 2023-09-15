import { db } from "@/config/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import moment from "moment/moment";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import EditMemberModal from "./EditMemberModal";
import { useAtom } from "jotai";
import { showToastMsg } from "@/store/showToastAtom";

function MemberItem({ member }) {
  console.log(member);
  const [toastMsg, setToastMsg] = useAtom(showToastMsg);

  const onDeleteDocHandler = async (id) => {
    await deleteDoc(doc(db, "member", id));
    setToastMsg("Berhasil menghapus!");
  };

  return (
    <div
      className="grid grid-cols-7 justify-between
    cursor-pointer hover:bg-gray-100
    p-3 rounded-md min-w-max "
    >
      <div className="flex gap-2 items-center col-span-3">
        <AiOutlineUser className="text-2xl" />
        <h2 className="text-[15px] truncate">{member.name}</h2>
      </div>
      <div className="grid grid-cols-4 col-span-4 place-content-start">
        <h2 className="text-[14px]">
          {moment(+member.last_active).format("DD MMM YYYY")}
        </h2>
        <h2 className="text-[15px] ml-2">{member.position}</h2>
        <h2 className="text-[15px]">{member.divisi}</h2>
        <div className=" flex gap-5">
          {" "}
          <h2
            className="text-[15px]"
            onClick={() => onDeleteDocHandler(member.id)}
          >
            <FaRegTrashAlt
              className="w-5 h-5 text-red-500
           hover:scale-110 transition-all"
            />
          </h2>
          <h2
            className="text-[15px]"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            <FiEdit
              className="w-5 h-5 text-green-500
           hover:scale-110 transition-all"
            />
          </h2>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal">
        <EditMemberModal member={member} />
      </dialog>
    </div>
  );
}

export default MemberItem;
