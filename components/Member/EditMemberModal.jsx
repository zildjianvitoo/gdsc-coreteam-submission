import React, { useState } from "react";
import { FcFolder } from "react-icons/fc";
import { db } from "@/config/firebase";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useAtom } from "jotai";
import { showToastMsg } from "@/store/showToastAtom";
import { AiOutlineUser } from "react-icons/ai";

function EditMemberModal({ member }) {
  const [memberName, setMemberName] = useState("");
  const [divisi, setDivisi] = useState("");
  const [lastActive, setLastActive] = useState("");
  const [position, setPosition] = useState("");
  const { data: session } = useSession();
  const [toastMsg, setToastMsg] = useAtom(showToastMsg);

  const onUpdateDocHandler = async (id) => {
    const memberRef = doc(db, "member", id);

    try {
      await updateDoc(memberRef, {
        name: memberName ? memberName : member.name,
        position: position ? position : member.position,
        divisi: divisi ? divisi : member.divisi,
      });
      setToastMsg("Member berhasil diupdate!");
      document.getElementById("my_modal_5").close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-box xs:w-1/2  sm:w-2/5 lg:w-[30%] xl:w-1/4">
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}

          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="w-full items-center flex flex-col justify-center gap-3">
            <AiOutlineUser className="w-16 h-16" />
            <input
              type="text"
              placeholder="Nama member"
              className="p-2 border outline-none rounded-md focus:outline-blue-400 focus:border-none w-full"
              defaultValue={member.name}
              onChange={(e) => setMemberName(e.target.value)}
            />
            <select
              className="border  p-2 outline-none rounded-md w-full focus:outline-blue-400 focus:border-none"
              defaultValue={member.divisi}
              onChange={(e) => setDivisi(e.target.value)}
            >
              <option disabled selected>
                Pilih Divisi
              </option>
              <option value={"FE"}>Frontend</option>
              <option value={"BE"}>Backend</option>
              <option value={"MobDev"}>Mobile Development</option>
              <option value={"ML"}>Machine Learning</option>
              <option value={"UIUX"}>UI/UX Design</option>
              <option value={"UIUX"}>Project Management</option>
              <option value={"UIUX"}>Public Relation</option>
              <option value={"CD"}>Community Development</option>
            </select>
            <select
              className="border  p-2 outline-none rounded-md w-full focus:outline-blue-400 focus:border-none"
              defaultValue={member.position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option disabled selected>
                Pilih Posisi
              </option>
              <option value={"Leader"}>Leader</option>
              <option value={"Co Leader"}>Co-Leader</option>
              <option value={"Core Team"}>Core Team</option>
              <option value={"Member"}>Member</option>
            </select>
            <button
              type="button"
              className="bg-sky-400 text-white rounded-md py-3 px-3 w-full opacity-90 hover:opacity-100"
              onClick={() => onUpdateDocHandler(member.id)}
            >
              Tambah Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditMemberModal;
