import { showToastMsg } from "@/store/showToastAtom";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

function Toast() {
  const [toastMsg, setToastMsg] = useAtom(showToastMsg);

  useEffect(() => {
    const toastMsgInterval = setTimeout(() => {
      setToastMsg("");
    }, 3000);
  }, [toastMsg]);

  if (!toastMsg) {
    return null;
  }

  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success bg-[#0F9E59]/70 text-white ">
        <span>{toastMsg}</span>
      </div>
    </div>
  );
}

export default Toast;
