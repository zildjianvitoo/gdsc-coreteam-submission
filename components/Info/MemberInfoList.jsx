import React from "react";
import MemberInfoItem from "./MemberInfoItem";
import { BsCodeSlash } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { MdManageAccounts } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";

function MemberInfoList() {
  const memberInfoList = [
    {
      id: 1,
      type: "Member",
      desc: "Seluruh Member GDSC tahun ini",
      size: "70",
      logo: <FiUsers className="text-green-600 text-xl" />,
      bgColor: "bg-green-200",
    },
    {
      id: 1,
      type: "Technical",
      desc: "(FE,BE,MobDev,ML,UIUX)",
      size: "45",
      logo: <BsCodeSlash className="text-blue-600 text-xl" />,
      bgColor: "bg-blue-200",
    },
    {
      id: 1,
      type: "Non Technical",
      desc: "(CD,PM,PR)",
      size: "25",
      logo: <MdManageAccounts className="text-yellow-600 text-xl" />,
      bgColor: "bg-yellow-200",
    },
    {
      id: 1,
      type: "Member Aktif",
      desc: "Termasuk jajaran inti dan seluruh member",
      size: "70",
      logo: <FaRegThumbsUp className="text-red-600 text-xl" />,
      bgColor: "bg-red-200",
    },
  ];
  return (
    <div className="mt-8">
      {memberInfoList.map((item, index) => (
        <MemberInfoItem item={item} key={index} />
      ))}
    </div>
  );
}

export default MemberInfoList;
