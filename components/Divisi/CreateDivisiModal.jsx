import React, { useState } from "react";
import { FcFolder } from "react-icons/fc";
import { db } from "@/config/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useAtom } from "jotai";
import { showToastMsg } from "@/store/showToastAtom";
import { parentDivisiIdAtom } from "@/store/parentDivisiIdAtom";

function CreateDivisiModal() {
  const [divisiName, setDivisiName] = useState("");
  const { data: session } = useSession();
  const [toastMsg, setToastMsg] = useAtom(showToastMsg);

  const divisiRef = collection(db, "divisi");
  const [parentDivisiId] = useAtom(parentDivisiIdAtom);

  const onCreateDivisiHandler = async () => {
    console.log(parentDivisiId);
    if (!divisiName) {
      return;
    }
    try {
      await addDoc(collection(db, "divisi"), {
        name: divisiName,
        parentDivisiId: parentDivisiId,
        createdBy: session.user?.name,
      });
      setToastMsg("Divisi berhasil dibuat!");
    } catch (error) {
      console.log(error);
    }
    setDivisiName("");
  };

  return (
    <div className="modal-box xs:w-1/2  sm:w-2/5 lg:w-[30%] xl:w-1/4">
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <form method="dialog" onSubmit={onCreateDivisiHandler}>
          {/* if there is a button in form, it will close the modal */}

          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="w-full items-center flex flex-col justify-center gap-3">
            <FcFolder className="w-16 h-16" />
            <input
              type="text"
              placeholder="Nama divisi"
              className="p-2 border outline-none rounded-md focus:outline-sky-400 focus:border-none w-full"
              value={divisiName}
              onChange={(e) => setDivisiName(e.target.value)}
            />
            <button
              type="submit"
              className="bg-sky-400 text-white rounded-md py-3 px-3 w-full opacity-90 hover:opacity-100"
            >
              Buat Divisi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateDivisiModal;
