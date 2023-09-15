import React from "react";
import UserInfo from "./UserInfo";
import MemberInfo from "./MemberInfo";
import { useSession } from "next-auth/react";
import MemberInfoList from "./MemberInfoList";

function Info() {
  const { data: session } = useSession();
  if (!session) {
    return null;
  }
  return (
    <div>
      <UserInfo />
      <MemberInfo />
      <MemberInfoList />
    </div>
  );
}

export default Info;
