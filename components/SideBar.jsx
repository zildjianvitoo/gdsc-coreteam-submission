import { sideBarAtom } from "@/store/sideBarAtom";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  AiOutlineUserAdd,
  AiOutlineFolderAdd,
  AiOutlineHome,
} from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineEventNote } from "react-icons/md";
import CreateDivisiModal from "./Divisi/CreateDivisiModal";
import AddMemberModal from "./Member/AddMemberModal";
import { useSession } from "next-auth/react";
import Link from "next/link";

const menu = [
  {
    name: "Utama",
    icon: <AiOutlineHome className="text-2xl" />,
  },
  {
    name: "Member",
    icon: <LuUsers2 className="text-2xl" />,
  },
  {
    name: "Acara",
    icon: <MdOutlineEventNote className="text-2xl" />,
  },
  {
    name: "Utama",
    icon: <AiOutlineHome className="text-2xl" />,
  },
];

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: session } = useSession();
  const [showSideBar, setShowSideBar] = useAtom(sideBarAtom);

  useEffect(() => {
    console.log(showSideBar);
  }, []);

  if (!session) {
    return null;
  }
  return (
    <>
      <div
        className={cn(
          " fixed w-full h-full top-0 left-0 z-[50] bg-[#00000084] hidden",
          {
            "block md:hidden": showSideBar,
          }
        )}
        onClick={() => setShowSideBar(false)}
      />
      <section
        className={cn(
          "w-[70%] xxs:w-[360px] sm:w-[320px] md:w-[280px] xl:w-[230px] bg-white min-h-screen fixed md:sticky top-0 left-0 z-[100] shadow-blue-300 shadow-md  flex flex-col gap-3 ",
          {
            "hidden ": showSideBar === false,
          }
        )}
      >
        {" "}
        <Link href={"/"}>
          <figure className="flex justify-center p-5">
            <Image
              width={150}
              height={60}
              src={"/assets/logo-gdsc.png"}
              alt="Logo gdsc"
            />
          </figure>
        </Link>
        <div className="flex flex-col gap-2 px-5">
          <button
            className="flex justify-between items-center gap-2 px-3 py-4 text-white transition-all bg-blue-400 rounded-lg hover:scale-105"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            {" "}
            Tambah Member
            <AiOutlineUserAdd className="text-lg" />
          </button>
          <button
            className="flex items-center justify-between gap-2 px-3 py-4 text-white transition-all rounded-lg bg-sky-400 hover:scale-105"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Tambah Divisi
            <AiOutlineFolderAdd className="text-2xl" />
          </button>

          <div className="flex flex-col justify-center w-full gap-4 mx-auto mt-6">
            {menu.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex items-center gap-2 py-3 px-4 text-xl text-gray-500 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white",
                  {
                    "text-white bg-blue-400": activeIndex === index,
                  }
                )}
              >
                {item.icon}
                <h3 className="px-3 ">{item.name}</h3>
              </div>
            ))}
          </div>
          <dialog id="my_modal_3" className="modal">
            <CreateDivisiModal />
          </dialog>
          <dialog id="my_modal_4" className="modal">
            <AddMemberModal />
          </dialog>
        </div>
      </section>
    </>
  );
}

export default SideBar;
