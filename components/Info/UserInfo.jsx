import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { BiLogOut } from "react-icons/bi";

function UserInfo() {
  const { data: session } = useSession();

  return (
    <div>
      {session && (
        <div className=" flex gap-3 items-center">
          <Image
            src={session.user.image}
            alt="Foto profil user"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="text-[15px] font-semibold">{session.user.name}</h2>
            <h2 className="text-[13px] text-gray-400 -mt-0.5">
              {session.user.email}
            </h2>
          </div>
          <div
            className="bg-blue-200 p-2 rounded-lg cursor-pointer"
            onClick={() => signOut("google")}
          >
            <BiLogOut className="text-sky-500 w-5 h-5 transition-all " />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
