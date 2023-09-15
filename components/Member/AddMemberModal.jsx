import React, { useState } from "react";
import { FcFolder } from "react-icons/fc";
import { db } from "@/config/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useAtom } from "jotai";
import { showToastMsg } from "@/store/showToastAtom";
import { AiOutlineUser } from "react-icons/ai";

function AddMemberModal() {
  const [memberName, setMemberName] = useState("");
  const [divisi, setDivisi] = useState("");
  const [lastActive, setLastActive] = useState("");
  const [position, setPosition] = useState("");
  const { data: session } = useSession();
  const [toastMsg, setToastMsg] = useAtom(showToastMsg);

  const memberRef = collection(db, "member");

  const onAddMemberHandler = async () => {
    if (!memberName) {
      return;
    }
    try {
      await addDoc(collection(db, "member"), {
        name: memberName,
        divisi: divisi,
        last_active: Date.now(),
        position: position,
        createdBy: session.user?.name,
      });
      setToastMsg("Member berhasil ditambah!");
    } catch (error) {
      console.log(error);
    }
    setMemberName("");
  };

  return (
    <div className="modal-box xs:w-1/2  sm:w-2/5 lg:w-[30%] xl:w-1/4">
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <form method="dialog" onSubmit={onAddMemberHandler}>
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
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />
            <select
              className="border  p-2 outline-none rounded-md w-full focus:outline-blue-400 focus:border-none"
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
              type="submit"
              className="bg-sky-400 text-white rounded-md py-3 px-3 w-full opacity-90 hover:opacity-100"
            >
              Tambah Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMemberModal;
